import React from 'react';

export default function Header(){


    return (
    <header style={{position:'sticky',top:0,zIndex:100,backgroundColor:'white'}}>
        <form className="header-menu-container">
        <input type="text" placeholder="search product"></input>
        <button type="button"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="#FFF" d="M8.925 16.364c-3.763 0-6.825-3.069-6.825-6.842C2.1 5.75 5.162 2.68 8.925 2.68c3.763 0 6.825 3.07 6.825 6.842 0 3.773-3.062 6.842-6.825 6.842m7.191-1.565c1.085-1.482 1.734-3.302 1.734-5.277 0-4.933-4.004-8.947-8.925-8.947C4.004.575 0 4.589 0 9.522c0 4.934 4.004 8.948 8.925 8.948 2.196 0 4.206-.803 5.761-2.128l3.693 3.702c.205.206.474.309.743.309.268 0 .537-.103.742-.309.41-.411.41-1.076 0-1.488L16.116 14.8z"></path></svg>
        </button>
        </form>
      </header>)
}