import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(){
 return(
    <div>
        <div className="headerArea">
            <div className="headerLeft">
                <div className="MainButton">
                    <Link to="/"><img src="/images-jsx/밤양갱.png" className="mainImage"/></Link><br/>
                </div>
            </div>

            <div className="headerRight">
                <div className="loginArea">
                    <Link to="/login" className="loginButton">로그인</Link>
                </div>

                <div className="startArea">
                    <Link to="/gameSearch" className="startButton">게임시작</Link>
                </div>
            </div>
        </div>

        <div className="nav">
            <ul className="navMenu">
                <li className="navItem">
                    <div>
                        <Link to="/guide" className="navLink">게임가이드</Link>
                    </div>
                </li>

                <li className="navItem">
                    <div >
                        <Link to="/board" className="navLink">커뮤니티</Link>
                    </div>
                </li>

                <li className="navItem">
                    <div>
                        <Link to="/notice" className="navLink">공지사항</Link>
                    </div>
                </li>

            </ul>
        </div>

    </div>
 )

};

export default Header;