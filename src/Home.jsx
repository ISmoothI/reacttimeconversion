import plusSignGif from './imgs/CalcPlusButtonShowcase.gif';
import CalcConvOptionsGif from './imgs/CalcConvShowcase.gif';
import workInProgressGif from './imgs/calcwebsitelogo.png';

function Home(){

    return(
        <div className='home-main'>
            <div className='home-about'>
                <h1>Welcome to</h1>
                <h1 className='home-sitetitle'>Yet Another Calculator Website</h1>
                <div className='home-details'>
                    <div className='home-card'>
                        <div className='home-subheading'>
                            <h2>Use multiple calculators and convertors within a single web-page</h2>
                        </div>
                        <div className='home-subbody'>
                            <h3>Just click the “+” symbol next to the name of the calculator you would like to use. Then, watch it appear right below!</h3>
                            <img src={plusSignGif} alt='A gif showing a plus symbol next to the calculator option'></img>
                        </div>
                    </div>
                </div>
                <div className='home-details'>
                    <div className='home-card'>
                        <div className='home-subheading'>
                            <h2>Choose between several types of calculators and convertors</h2>
                        </div>
                        <div className='home-subbody'>
                            <h3>Want to know the age of someone you know without awkwardly asking them? Check out our Age Calculator!

                            Need to find the values of a specific type of unit measurement? Check out our Unit Converter!</h3>
                            <img src={CalcConvOptionsGif} alt='A gif showing the different calculator and conversion options available'></img>
                        </div>
                    </div>
                </div>
                <div className='home-details'>
                    <div className='home-card'>
                        <div className='home-subheading'>
                            <h2>Still a work in progress</h2>
                        </div>
                        <div className='home-subbody'>
                            <h3>This website was made with the intention of getting better at web development. I may come back every so often to add extra features.</h3>
                            <img src={workInProgressGif} alt='Website logo'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;