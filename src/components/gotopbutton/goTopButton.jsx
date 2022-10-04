import './goTopButton.css';

const GoTopButton = () => {
    
    window.onscroll = function(){
        if (document.documentElement.scrollTop > 100){
            document.querySelector('.go-top-container').classList.add('show');
        } else{
            document.querySelector('.go-top-container').classList.remove('show');
        }
    }

    function goTop(){
        document.querySelector('.go-top-container').addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    return (
        <div className="container">
            <div className="go-top-container" onClick={() => goTop()}>
                <div className='go-top-button'>
                    <i className="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    );
}
 
export default GoTopButton;