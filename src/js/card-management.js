

const offerLayout = document.querySelector("#btn-more")


function setCard(obj) {

    if (obj.isDeposite) {
        offerLayout.insertAdjacentHTML('beforebegin', `
        <div class="mark green">
            <svg class="icon"><use xlink:href="#ico-dollar"/></svg>
            Additional deposit upon registration
        </div>
        `);
    } else if (obj.isMostPopular) {
        offerLayout.insertAdjacentHTML('beforebegin', `
        <div class="mark orange">
            <svg class="icon"><use xlink:href="#ico-mark-like"/></svg>
            Most popular casino 2024
        </div>
        `);
    }


    const div = `

    <div class="card no-open">
        <div class="subline-1">
            <div class="block-id">${obj.id}</div>
            <div class="block logo">${obj.logo}</div>
            <div class="block about">
                <div class="line expert">
                    <span>Expert Bewertung</span>
                    <svg class="icon"><use xlink:href="#ico-mark"/></svg>
                </div>

                <div class="line rating">
                    <svg class="icon"><use xlink:href="#ico-star"/></svg>
                    <span>${obj.rating}</span>
                </div>

                <div class="line link">
                    <a href="#">Midas Testebricht</a>
                </div>
            </div>

            ${obj.isRegulator ? regulator : speed}

            <div class="block gift">
                <div class="title">
                    <svg class="icon"><use xlink:href="#ico-gift"/></svg>
                    <span>Welcome bonus</span>
                </div>
                <div class="descr">
                    ${obj.bonus}
                </div>
            </div>

            <div id="play-now">
                <button>JETZT SPIELEN</button>
            </div>
        
        </div>


        <div class="btn-expand">
            <button>
                <span>Mehr Infos</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.28 5.9668L8.9333 10.3135C8.41997 10.8268 7.57997 10.8268 7.06664 10.3135L2.71997 5.9668" stroke="#000706" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>


        <div class="subline-2">
            <div class="block">
                <div class="title">Nützliche Informationen</div>

                <div class="check-list">
                    <div class="point">
                        <svg class="icon"><use xlink:href="#ico-check"/></svg>
                        <span>Bestes Online Casino German</span>
                    </div>
                    <div class="point">
                        <svg class="icon"><use xlink:href="#ico-check"/></svg>
                        <span>Einzahlungsbonus inkl. Free Spins</span>
                    </div>
                    <div class="point">
                        <svg class="icon"><use xlink:href="#ico-check"/></svg>
                        <span>Hauseigene Casino Spiele</span>
                    </div>
                </div>

            </div>

            <div class="block">
                <div class="title">Zahlungsarten</div>

                <div class="payment">

                    ${payments.map(elem => '<div class="canvas">' + elem + "</div>").slice(0, 5).join(" ")}

                    <div class="dropdown">
                        <div class="btn-drop">+${payments.slice(5).length}</div>
                        <div class="content">
                            <div>${payments.map(elem => '<div class="canvas">' + elem + "</div>").slice(5).join(" ")}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block">
                <div class="title">Krypto-Zahlungen</div>

                <div class="payment">
                    ${kryptos.map(elem => '<div class="canvas">' + elem + "</div>").join(" ")}
                </div>
            </div>

            <div class="block other">
                <div class="sub-block">
                    <div class="title">Auszahl.Dauer</div>
                    <div class="text">Sofort</div>
                </div>
                <div class="sub-block">
                    <div class="title">Jahr</div>
                    <div class="text">2015</div>
                </div>
                <div class="sub-block">
                    <div class="title">Auszahl. Limit</div>
                    <div class="text">20000€/Monat:</div>
                </div>
                <div class="sub-block">
                    <div class="title">Lizenzart</div>
                    <div class="text">MGA</div>
                </div>
            </div>

            <div class="block age18">
                18+. AGB gelten. Verantwortungsbewusstes Spielen
            </div>

        </div>

    </div>
    `

    offerLayout.insertAdjacentHTML('beforebegin', div);


    
}

window.onload = function() {

    casinos.forEach( obj => {
        setCard(obj)
    })

    document.querySelectorAll(".btn-expand").forEach(btn => {
        btn.onclick = e => {
            const isOpen = !e.currentTarget.parentNode.classList.contains("no-open")
            document.querySelectorAll(".card").forEach(card => {
                if (card !== e.currentTarget.parentNode)
                    card.classList.add("no-open")
            })

            if (isOpen){
                e.currentTarget.parentNode.classList.add("no-open");
            } else {
                e.currentTarget.parentNode.classList.remove("no-open");
            }
        }
    })
}


let countrepeat = 0;
  
offerLayout.addEventListener("click", e => {
    countrepeat += 1;

    casinos.forEach( obj => {
        const newObj = {...obj}
        newObj.id += countrepeat * casinos.length
        setCard(newObj)
    })

    document.querySelectorAll(".btn-expand").forEach(btn => {
        btn.onclick = e => {
            const isOpen = !e.currentTarget.parentNode.classList.contains("no-open")
            document.querySelectorAll(".card").forEach(card => {
                if (card !== e.currentTarget.parentNode)
                    card.classList.add("no-open")
            })

            if (isOpen){
                e.currentTarget.parentNode.classList.add("no-open");
            } else {
                e.currentTarget.parentNode.classList.remove("no-open");
            }
        }
    })
})


