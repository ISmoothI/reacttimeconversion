import lightmode from './imgs/sunfigma.png'

function Home(){

    return(
        <div className='home-main'>
            <div className='home-about'>
                <h1>Welcome to</h1>
                <h1 className='home-sitetitle'>Yet Another Calculator Website</h1>
                <div className='home-details'>
                    <div className='home-card'>
                        <div className='home-subheading'>
                            <h3>Use multiple calculators and convertors within a single web-page</h3>
                        </div>
                        <div className='home-subbody'>
                            <h5>Just click the “+” symbol next to the name of the calculator you would like to use. Then, watch it appear right below!</h5>
                            <img src={lightmode} alt='yes'></img>
                        </div>
                    </div>
                </div>
                <div className='home-details'>
                    <div className='home-card'>
                        <div className='home-subheading'>
                            <h3>Choose between several types of calculators and convertors</h3>
                        </div>
                        <div className='home-subbody'>
                            <h5>Want to know the age of someone you know without awkwardly asking them? Check out our Age Calculator!

                            Need to find the values of a specific type of unit measurement? Check out our Unit Converter!</h5>
                            <img src={lightmode} alt='yes'></img>
                        </div>
                    </div>
                </div>
                <div className='home-details'>
                    <div className='home-card'>
                        <div className='home-subheading'>
                            <h3>Still a work in progress</h3>
                        </div>
                        <div className='home-subbody'>
                            <h5>This website was made with the intention of getting better at web development. Bear with me if you don’t see a calculator that you need as I may come back every so often to add extra features.</h5>
                            <img src={lightmode} alt='yes'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;