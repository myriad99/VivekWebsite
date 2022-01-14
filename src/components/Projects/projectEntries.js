import pedestrianIdentifier from '../../img/pedestrianIdentifier.png'
import edgeDetector from '../../img/edgeDetector.png'
import panaromicPictures from '../../img/panaromicPicturesNew.png'

export const ProjectEntries = [
    {
        id: 6,
        projectTitle: 'Pedestrian Identifier',
        projectImg: pedestrianIdentifier,
        projectDescription: 'In this project, I built a pedestrian identifier that  detects several pedestrians in high-resolution images. The perceptron was trained on roughly 3.6k images and test on 1.5k images with 95% accuracy.',
        projectSkill1: 'Linear Algebra',
        projectSkill2: 'Computer Vision',
        projectSkill3: 'Python 3',
        projectLink: 'https://portfolium.com/entry/pedestrian-identifier'
    }, 
    {
        id: 7,
        projectTitle: 'Edge Detector',
        projectImg: edgeDetector,
        projectDescription: "I made an edge detection program based on the Canny algorithm.  I used Gaussian smoothing, computed the gradients, and used non-maximum suppression to highlight the object's edge pixels.",
        projectSkill1: 'Canny',
        projectSkill2: 'Computer Vision',
        projectSkill3: 'Gradients',
        projectLink: 'https://portfolium.com/entry/edge-detector'
    },  
    {
        id: 8,
        projectTitle: 'Panoramic Pictures',
        projectImg: panaromicPictures,
        projectDescription: "This program builds a panoramic image out of several images by finding the corners of each image and using RANSAC to fully construct the panoramic image based on the found corners. ",
        projectSkill1: 'Gradients',
        projectSkill2: 'RANSAC',
        projectSkill3: 'Vector Math',
        projectLink: 'https://portfolium.com/entry/panoramic-pictures'
    },  
]