from fastapi import FastAPI, File, UploadFile, Form
from pydantic import BaseModel
from PIL import Image
import pytesseract
import google.generativeai as genai
import re
import io
import os
from dotenv import load_dotenv


load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

app = FastAPI()

def remove_markdown_formatting(text):
    cleaned_text = re.sub(r'\*+', '', text).strip()
    return cleaned_text

class ComplaintInput(BaseModel):
    complaint_description: str

def urgency_detection(complaint_description, image_text):
    img_response = model.generate_content(["It is a complaint, predict it's urgency.", image_text])
    prompt = f"Urgency based on image data: {img_response} and also Predict urgency of the complaint: {complaint_description}. And from these two predict the actual urgency of the complaint. Only give the urgency in the output"
    response = model.generate_content(prompt)
    feedback = response.text
    return feedback

def categorize_complaint(description, image_text):
    categories = [
        "Cleanliness", "Catering Services", "Coach Maintenance", "Ticketing Issues",
        "Punctuality", "Security", "Medical Emergencies", "Staff Behavior", 
        "Unauthorized Activities", "Passenger Amenities", "Station Facilities", "Train Services"
    ]
    str_categories = ", ".join(categories)
    prompt = f"Categorize this complaint into these categories which suited the most: {str_categories}. Only give the category name in the output in simple text format"
    response = model.generate_content([prompt, image_text])
    feedback = remove_markdown_formatting(response.text)
    return feedback

@app.post("/category-urgency/")
async def analyze_complaint(complaint_description: str = Form(...), image: UploadFile = File(None)):
    image_text = ""
    if image:
        image_content = await image.read()
        image_data = Image.open(io.BytesIO(image_content))
        image_text = pytesseract.image_to_string(image_data)
    
    category = categorize_complaint(complaint_description +" "+ image_text, image_data)
    
    urgency = urgency_detection(complaint_description, image_data)
    urgency = urgency.strip().replace("\n", "")
    
    return {
        "category": category,
        "urgency": urgency
    }
