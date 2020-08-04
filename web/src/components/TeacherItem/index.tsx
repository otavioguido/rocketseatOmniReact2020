import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF1ItA3uoJ4JQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=qsD7IDxgIGgqka-FujlhnzFw5_wG1PKqkmA9OxgFcCA" alt="Otávio Guido Silva"/>
                <div>
                    <strong>Otávio Guido Silva</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla.
            </p>

            <footer>
                <p>                            
                    Preço/hora
                    <strong>R$ 30,00</strong>
                </p>

                <button type="button" >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contanto.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;