class Menu extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        
        <ul class="sidebar__lista">

            <li class="sidebar__elemento sidebar__elemento--borde">
                <a class="sidebar__enlace" href="index.html">Pagína principal</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="info-gral.html">Información general</a>
            </li>
            
            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="modulo-1.html">Módulo 1</a>
            </li>

        </ul>

        `;

    }
}

customElements.define('menu-component', Menu);