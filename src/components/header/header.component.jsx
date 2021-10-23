import React from 'react';
import './header.styles.scss';
import Sort from '../../components/sorting/sort.component';
import Dialogbox from '../../components/dialog/dialog.component';

const Header = (category) => (

    <div className = "header-container">
        <div className="product">
            <h1 className = "prd">Products</h1>
        </div>
        <div className = "addprdbutton">
            <Dialogbox category = {category}/>
            <Sort/>
        </div>        
    </div>
    
    );
    
    export default Header ;