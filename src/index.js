import './styles/index.scss';

console.log('Wake up, Neo...');

const buttons = document.querySelectorAll('.header__button');

for (const button of buttons) {
    button.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            console.log(e.target);
        }
    });
}
