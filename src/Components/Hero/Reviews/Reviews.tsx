import React from 'react'
import "./Reviews.scss"
import Ratings from './Ratings'
import Team4 from "../../../Images/Team4.jpg"


const Reviews = () => {
  return (
    <section className='Review'>
       <h2>Cool Reviews</h2> 
       <p>We have an impressive collection of outstanding products for you and your family.</p>
       <Ratings/>
       <section className='Comments'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 20C37.5 15.3587 35.6563 10.9075 32.3744 7.62563C29.0925 4.34375 24.6413 2.5 20 2.5C15.3587 2.5 10.9075 4.34375 7.62563 7.62563C4.34375 10.9075 2.5 15.3587 2.5 20C2.5 24.6413 4.34375 29.0925 7.62563 32.3744C10.9075 35.6563 15.3587 37.5 20 37.5C24.6413 37.5 29.0925 35.6563 32.3744 32.3744C35.6563 29.0925 37.5 24.6413 37.5 20ZM0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20ZM28.75 21.25C29.0815 21.25 29.3995 21.1183 29.6339 20.8839C29.8683 20.6495 30 20.3315 30 20C30 19.6685 29.8683 19.3505 29.6339 19.1161C29.3995 18.8817 29.0815 18.75 28.75 18.75L14.2675 18.75L19.635 13.385C19.7512 13.2688 19.8434 13.1308 19.9063 12.979C19.9692 12.8271 20.0016 12.6644 20.0016 12.5C20.0016 12.3356 19.9692 12.1729 19.9063 12.021C19.8434 11.8692 19.7512 11.7312 19.635 11.615C19.5188 11.4988 19.3808 11.4066 19.229 11.3437C19.0771 11.2808 18.9144 11.2484 18.75 11.2484C18.5856 11.2484 18.4229 11.2808 18.271 11.3437C18.1192 11.4066 17.9812 11.4988 17.865 11.615L10.365 19.115C10.2486 19.2311 10.1562 19.3691 10.0932 19.5209C10.0302 19.6728 9.99777 19.8356 9.99777 20C9.99777 20.1644 10.0302 20.3272 10.0932 20.4791C10.1562 20.6309 10.2486 20.7689 10.365 20.885L17.865 28.385C17.9812 28.5012 18.1192 28.5934 18.271 28.6563C18.4229 28.7192 18.5856 28.7516 18.75 28.7516C18.9144 28.7516 19.0771 28.7192 19.229 28.6563C19.3808 28.5934 19.5188 28.5012 19.635 28.385C19.7512 28.2688 19.8434 28.1308 19.9063 27.979C19.9692 27.8271 20.0016 27.6644 20.0016 27.5C20.0016 27.3356 19.9692 27.1729 19.9063 27.021C19.8434 26.8692 19.7512 26.7312 19.635 26.615L14.2675 21.25L28.75 21.25Z" fill="#255FFF"/>
            </svg>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.
            </p>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 20C2.5 24.6413 4.34374 29.0925 7.62563 32.3744C10.9075 35.6563 15.3587 37.5 20 37.5C24.6413 37.5 29.0925 35.6563 32.3744 32.3744C35.6563 29.0925 37.5 24.6413 37.5 20C37.5 15.3587 35.6563 10.9075 32.3744 7.62563C29.0925 4.34374 24.6413 2.5 20 2.5C15.3587 2.5 10.9075 4.34374 7.62563 7.62563C4.34374 10.9075 2.5 15.3587 2.5 20ZM40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20ZM11.25 18.75C10.9185 18.75 10.6005 18.8817 10.3661 19.1161C10.1317 19.3505 10 19.6685 10 20C10 20.3315 10.1317 20.6495 10.3661 20.8839C10.6005 21.1183 10.9185 21.25 11.25 21.25H25.7325L20.365 26.615C20.2488 26.7312 20.1566 26.8692 20.0937 27.021C20.0308 27.1729 19.9984 27.3356 19.9984 27.5C19.9984 27.6644 20.0308 27.8271 20.0937 27.979C20.1566 28.1308 20.2488 28.2688 20.365 28.385C20.4812 28.5012 20.6192 28.5934 20.771 28.6563C20.9229 28.7192 21.0856 28.7516 21.25 28.7516C21.4144 28.7516 21.5771 28.7192 21.729 28.6563C21.8808 28.5934 22.0188 28.5012 22.135 28.385L29.635 20.885C29.7514 20.7689 29.8438 20.6309 29.9068 20.4791C29.9698 20.3272 30.0022 20.1644 30.0022 20C30.0022 19.8356 29.9698 19.6728 29.9068 19.5209C29.8438 19.3691 29.7514 19.2311 29.635 19.115L22.135 11.615C22.0188 11.4988 21.8808 11.4066 21.729 11.3437C21.5771 11.2808 21.4144 11.2484 21.25 11.2484C21.0856 11.2484 20.9229 11.2808 20.771 11.3437C20.6192 11.4066 20.4812 11.4988 20.365 11.615C20.2488 11.7312 20.1566 11.8692 20.0937 12.021C20.0308 12.1729 19.9984 12.3356 19.9984 12.5C19.9984 12.6644 20.0308 12.8271 20.0937 12.979C20.1566 13.1308 20.2488 13.2688 20.365 13.385L25.7325 18.75H11.25Z" fill="#255FFF"/>
            </svg>

       </section>
       <section className='Author'>
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 20C37.5 15.3587 35.6563 10.9075 32.3744 7.62563C29.0925 4.34375 24.6413 2.5 20 2.5C15.3587 2.5 10.9075 4.34375 7.62563 7.62563C4.34375 10.9075 2.5 15.3587 2.5 20C2.5 24.6413 4.34375 29.0925 7.62563 32.3744C10.9075 35.6563 15.3587 37.5 20 37.5C24.6413 37.5 29.0925 35.6563 32.3744 32.3744C35.6563 29.0925 37.5 24.6413 37.5 20ZM0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20ZM28.75 21.25C29.0815 21.25 29.3995 21.1183 29.6339 20.8839C29.8683 20.6495 30 20.3315 30 20C30 19.6685 29.8683 19.3505 29.6339 19.1161C29.3995 18.8817 29.0815 18.75 28.75 18.75L14.2675 18.75L19.635 13.385C19.7512 13.2688 19.8434 13.1308 19.9063 12.979C19.9692 12.8271 20.0016 12.6644 20.0016 12.5C20.0016 12.3356 19.9692 12.1729 19.9063 12.021C19.8434 11.8692 19.7512 11.7312 19.635 11.615C19.5188 11.4988 19.3808 11.4066 19.229 11.3437C19.0771 11.2808 18.9144 11.2484 18.75 11.2484C18.5856 11.2484 18.4229 11.2808 18.271 11.3437C18.1192 11.4066 17.9812 11.4988 17.865 11.615L10.365 19.115C10.2486 19.2311 10.1562 19.3691 10.0932 19.5209C10.0302 19.6728 9.99777 19.8356 9.99777 20C9.99777 20.1644 10.0302 20.3272 10.0932 20.4791C10.1562 20.6309 10.2486 20.7689 10.365 20.885L17.865 28.385C17.9812 28.5012 18.1192 28.5934 18.271 28.6563C18.4229 28.7192 18.5856 28.7516 18.75 28.7516C18.9144 28.7516 19.0771 28.7192 19.229 28.6563C19.3808 28.5934 19.5188 28.5012 19.635 28.385C19.7512 28.2688 19.8434 28.1308 19.9063 27.979C19.9692 27.8271 20.0016 27.6644 20.0016 27.5C20.0016 27.3356 19.9692 27.1729 19.9063 27.021C19.8434 26.8692 19.7512 26.7312 19.635 26.615L14.2675 21.25L28.75 21.25Z" fill="#255FFF"/>
            </svg>
            <img src={Team4} alt="fourth team member" />
            <p>Janet Jason <br /> <span>CEO, Inspiro</span></p>
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 20C2.5 24.6413 4.34374 29.0925 7.62563 32.3744C10.9075 35.6563 15.3587 37.5 20 37.5C24.6413 37.5 29.0925 35.6563 32.3744 32.3744C35.6563 29.0925 37.5 24.6413 37.5 20C37.5 15.3587 35.6563 10.9075 32.3744 7.62563C29.0925 4.34374 24.6413 2.5 20 2.5C15.3587 2.5 10.9075 4.34374 7.62563 7.62563C4.34374 10.9075 2.5 15.3587 2.5 20ZM40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20ZM11.25 18.75C10.9185 18.75 10.6005 18.8817 10.3661 19.1161C10.1317 19.3505 10 19.6685 10 20C10 20.3315 10.1317 20.6495 10.3661 20.8839C10.6005 21.1183 10.9185 21.25 11.25 21.25H25.7325L20.365 26.615C20.2488 26.7312 20.1566 26.8692 20.0937 27.021C20.0308 27.1729 19.9984 27.3356 19.9984 27.5C19.9984 27.6644 20.0308 27.8271 20.0937 27.979C20.1566 28.1308 20.2488 28.2688 20.365 28.385C20.4812 28.5012 20.6192 28.5934 20.771 28.6563C20.9229 28.7192 21.0856 28.7516 21.25 28.7516C21.4144 28.7516 21.5771 28.7192 21.729 28.6563C21.8808 28.5934 22.0188 28.5012 22.135 28.385L29.635 20.885C29.7514 20.7689 29.8438 20.6309 29.9068 20.4791C29.9698 20.3272 30.0022 20.1644 30.0022 20C30.0022 19.8356 29.9698 19.6728 29.9068 19.5209C29.8438 19.3691 29.7514 19.2311 29.635 19.115L22.135 11.615C22.0188 11.4988 21.8808 11.4066 21.729 11.3437C21.5771 11.2808 21.4144 11.2484 21.25 11.2484C21.0856 11.2484 20.9229 11.2808 20.771 11.3437C20.6192 11.4066 20.4812 11.4988 20.365 11.615C20.2488 11.7312 20.1566 11.8692 20.0937 12.021C20.0308 12.1729 19.9984 12.3356 19.9984 12.5C19.9984 12.6644 20.0308 12.8271 20.0937 12.979C20.1566 13.1308 20.2488 13.2688 20.365 13.385L25.7325 18.75H11.25Z" fill="#255FFF"/>
            </svg>
            
       </section>

    </section>
  )
}

export default Reviews