import PropTypes from 'prop-types';
import pic from '../../assets/Faq-02.jpg'
const Accordian = props => {
    return (
        <div className='md:flex  px-4 gap-10'>
            <div>
                <img src={pic} alt="" />
            </div>
            <div className='text-cyan-800 mt-4 md:mt-0 content-center space-y-4 '>
                <div>
                    <h2 className='text-3xl md:text-5xl mb-10 font-bold'>Frequently Asked Questions</h2>
                </div>
                <div className="collapse collapse-arrow p-4 bg-white">
                    <input type="radio" name="my-accordion-2" className='' defaultChecked />
                    <div className="collapse-title text-2xl font-bold ">What Are Your Gallery Opening Hours?
                    </div>
                    <div className="collapse-content  font-Firasans">
                        <p>Nature has always been a profound source of inspiration in art, symbolizing life, harmony, and beauty. Across cultures</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow p-4 bg-white">
                    <input type="radio" name="my-accordion-2" className='' defaultChecked />
                    <div className="collapse-title text-2xl font-bold">What Is Your Visiting Hours?
                    </div>
                    <div className="collapse-content  font-Firasans">
                        <p>Colors evoke specific emotions due to psychological and cultural associations</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow p-4 bg-white">
                    <input type="radio" name="my-accordion-2" className='' defaultChecked />
                    <div className="collapse-title text-2xl font-bold">Is Your Business Open On Bank Holidays?
                    </div>
                    <div className="collapse-content  font-Firasans">
                        <p>Art fosters mindfulness by encouraging focus on the present moment</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow p-4 bg-white">
                    <input type="radio" name="my-accordion-2" className='' defaultChecked />
                    <div className="collapse-title text-2xl font-bold">Who Is Responsible For Stolen Arts?
                    </div>
                    <div className="collapse-content  font-Firasans">
                        <p>This process can lead to self-discovery and emotional release, making abstract art a powerful tool for personal clarity.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow p-4 bg-white">
                    <input type="radio" name="my-accordion-2" className='' defaultChecked />
                    <div className="collapse-title text-2xl font-bold">Who Owns The Copyright Of My Art Work?
                    </div>
                    <div className="collapse-content  font-Firasans">
                        <p>Art therapy uses creative expression to improve mental, emotional, and physical health.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

Accordian.propTypes = {

};

export default Accordian;