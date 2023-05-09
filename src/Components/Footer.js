import { MapPinIcon, AtSymbolIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <div className="b bg-gray-900">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-3">
                <div className=' py-28'>
                    <h3 className=' text-6xl'>Watchflix</h3>
                    <p className='text-base text-gray-300 mt-8'>Lorem Ipsummmmmmmmmmmmmm</p>
                    <div className=' mt-10'>join NewsLetters</div>
                    <div className=' mt-6 flex items-center'>
                        <input className=' p-4 w-full max-w-xs bg-gray-600 rounded-md' placeholder='Insert your mail here' />
                        <button className=' bg-yellow-300 rounded-md p-3 -ml-12 '><ArrowRightIcon className='h-4 w-4 text-black' /></button>
                    </div>
                </div>
                <div className=' px-16 py-28 grid-cols-2'>
                    <div className='flex gap-40'>
                        <div className='drid gap-2'>
                            <h4 className='font-bold'>Product 
                            </h4>
                            <p>Movies</p>
                            <p>TV Show</p>
                            <p>Videos</p>
                        </div>
                        <div className='drid gap-2'><h4 className='font-bold'>Media Group
                        </h4>
                            <p>Nice Studio</p>
                            <p>Nice News</p>
                            <p>Nice TV</p>
                        </div>
                        <div className='drid gap-2'><h4 className='font-bold'>Sitemap
                        </h4>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Press</p>

                        </div>
                    </div>
                    <div className=' flex mt-24 gap-4'>
                        <span className='flex gap-1 items-center'><MapPinIcon className='h-4 w-4 text-white' /> 8819 Ohio St. South Gate, California 90280</span>
                        <span className='flex gap-1 items-center'><AtSymbolIcon className='h-4 w-4 text-white' />ourstudio@hello.com</span>
                        <span className='flex gap-1 items-center'><PhoneIcon className='h-4 w-4 text-white' />+271 386-647-3637</span>
                    </div>
                </div>
            </div>
        </div>
    )
}