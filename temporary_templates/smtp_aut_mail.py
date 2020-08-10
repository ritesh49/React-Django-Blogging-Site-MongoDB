import smtplib
from email import encoders
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart

server = smtplib.SMTP('smtp.gmail.com',25)
server.connect('smtp.gmail.com',587)
server.ehlo()
server.starttls()
server.ehlo()

server.login('faqritesh@gmail.com','Ritesh#456')

msg = MIMEMultipart()
msg['From'] = 'Ritesh Ramchandani Mime Multipart'
msg['To'] = 'riteshramchandani123@gmail.com'
msg['Subject'] = 'Just a Test Mail'

with open('msg.txt','r') as f:
    message = f.read()

msg.attach(MIMEText(message,'plain'))

filename = 'image.png'

attachment = open(filename,'rb')

p = MIMEBase('application','octet-stream')
p.set_payload(attachment.read())

encoders.encode_base64(p)
p.add_header('Content-Disposition',f'attachment; filename = {filename}')

msg.attach(p)

text = msg.as_string()
server.sendmail('faqritesh@gmail.com','riteshramchandani123@gmail.com',text)