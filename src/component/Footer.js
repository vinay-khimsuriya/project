import React, { useEffect } from 'react';
import {footerContent} from './FooterContent'

const Footer = () => {
    useEffect(()=>{
        const abc = ()=>{
            const footerContainer = document.querySelector('.footer-container1');
    footerContainer.innerHTML=footerContent;
        }
        abc();
    })
    
    
  return (
    <>
    <div className="footer-main-container">
        <div className="footer-container1"></div>
        <div className="footer-container2">
            <div className="footer-list1 footer-list">
                <ul>
                    <li>Shop and Learn</li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>Vision</li>
                    <li>Airpods</li>
                    <li>TV & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
                <ul>
                    <li>Apple Wallet</li>
                    <li>Wallet</li>
                    <li>Apple Card</li>
                    <li>Apple Pay</li>
                    <li>Apple Cash</li>
                </ul>
            </div>

            <div className="footer-list2 footer-list">
                <ul>
                    <li>Account</li>
                    <li>Manage Your Apple Account</li>
                    <li>Apple Store Account</li>
                    <li>iCloud.com</li>
                </ul>
                <ul>
                    <li>Entertainment</li>
                    <li>Apple One</li>
                    <li>Apple TV+</li>
                    <li>Apple Music</li>
                    <li>Apple Arcade</li>
                    <li>Apple Fitness+</li>
                    <li>Apple News+</li>
                    <li>Apple Podcasts</li>
                    <li>Apple Books</li>
                    <li>Apple Store</li>
                </ul>
            </div>

            <div className="footer-list3 footer-list">
                <ul>
                    <li>Apple Store</li>
                    <li>Find a Store</li>
                    <li>Genius Bar</li>
                    <li>Today at Apple</li>
                    <li>Group Reservations</li>
                    <li>Apple Camp</li>
                    <li>Apple Store App</li>
                    <li>Certified Refurbished</li>
                    <li>Apple Trade in</li>
                    <li>Financing</li>
                    <li>Carrier Deals at Apple</li>
                    <li>Order Status</li>
                    <li>Shopping Help</li>
                </ul>
            </div>

            <div className="footer-list4 footer-list">
                <ul>
                    <li>For Business</li>
                    <li>Apple and Business</li>
                    <li>Shop for Business</li>
                </ul>
                <ul>
                    <li>For Education</li>
                    <li>Apple and Education</li>
                    <li>Shop for K-12</li>
                    <li>Shop for College</li>
                </ul>
                <ul>
                    <li>For Healthcare</li>
                    <li>Apple in Healthcare</li>
                    <li>Mac in Healthcare</li>
                    <li>Health on Apple Watch</li>
                    <li>Health Records on iPhone and iPad</li>
                </ul>
                
                <ul>
                    <li>For Government</li>
                    <li>Shop for Government</li>
                    <li>Shop for Veterans and Military</li>
                </ul>
            </div>

            <div className="footer-list5 footer-list">
                <ul>
                    <li>Apple Values</li>
                    <li>Accessibility</li>
                    <li>Education</li>
                    <li>Environment</li>
                    <li>Inclusion and Diversity</li>
                    <li>Privacy</li>
                    <li>Racial Equity and Justice</li>
                    <li>Supply Chain</li>
                </ul>
                <ul>
                    <li>About Apple</li>
                    <li>Newsroom</li>
                    <li>Apple Leadership</li>
                    <li>Career Opportunities</li>
                    <li>Investors</li>
                    <li>Ethics and Compliance</li>
                    <li>Events</li>
                    <li>Contact Apple</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
