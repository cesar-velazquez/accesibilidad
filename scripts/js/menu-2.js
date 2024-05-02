class Menu2 extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `

        <ul class="sidebar__lista">

            <li class="sidebar__elemento sidebar__elemento--borde">
                <a class="sidebar__enlace titulo-nav-modulo" href="../index.html">Página principal</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="../general-information.html">General information</a>
            </li>
            
            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="../unit-1.html">Módulo 1</a>
            </li>

            <!-- ------- Unit 2 ------- -->

            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="../unit-2.html">Unit 2. Learner differences</a>
            </li>


            <!-- ------- Unit 2 ------- -->


            <!-- ------- Unit 3 ------- -->

            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="../unit-3.html">Unit 3. Learner Language</a>
            </li>

            <!-- ------- Unit 3 ------- -->


            <!-- ------- Unit 4 ------- -->

            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="../unit-4.html">Unit 4. The role of formal instruction</a>
            </li>

            <!-- ------- Unit 4 ------- -->

        </ul>

        `;

    }
}

customElements.define('menu-component-2', Menu2);