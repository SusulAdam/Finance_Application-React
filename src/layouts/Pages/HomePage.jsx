import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <section className="homePage">
                <div className="homePage__container">
                    <div className="homePage__informations">
                        <p className="homePage__heading">Plan your savings!</p>
                        <p className="homePage__information">
                            Managing your money has never been easier. Control your expenses, check your investments and plan your budget.  </p>

                        <Link to="/manage-finances" ><button className="homePage__control click-control weight">Plan now</button></Link>


                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;