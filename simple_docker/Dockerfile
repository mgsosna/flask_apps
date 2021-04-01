# Use the Ubuntu OS Docker image
FROM ubuntu

# Update the Ubuntu packages
RUN apt-get update

# Install Python3, pip, and Flask
RUN apt-get install -y python3 python3-pip
RUN python3 -m pip install flask

# Copy the local app.py file to the Docker image directory
COPY app.py /opt/app.py

# Expose port 80 from the Docker container to the host
EXPOSE 80

# Run this code on starting the container
ENTRYPOINT python3 /opt/app.py
