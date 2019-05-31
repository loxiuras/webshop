class Modal {

    constructor(name, data)
    {
        this.name = name;
    }

    settings( data )
    {
        this.m_Padding = (data.padding) ? data.padding: 0;
        this.m_Margin = (data.margin) ? data.margin: 0;
        this.m_Flex = (data.flex);
        this.m_Background = (data.background);
        this.m_BackgroundColor = (data.backgroundColor) ? (data.background) ? data.backgroundColor : "" : "";
        this.m_CloseIcon = (data.closeIcon);
    }

    addContent( data )
    {
        let html = (this.m_CloseIcon) ? "<div class='modal__close-icon'><i class='fal fa-times'></i></div>" : "";
        this.m_Header = (data.header) ? data.header : "";
        this.m_Body = (data.body) ? data.body : "";
        this.m_Footer = (data.footer) ? data.footer : "";

        this.buildModal();

        let modal = document.getElementById("modal");
            html += this.m_Header + this.m_Body + this.m_Footer;
        modal.innerHTML = html;
    }

    buildModal()
    {
        let container = document.createElement('div');
        container.setAttribute('id', this.name);
        container.classList.add('modal-container');
        document.body.appendChild(container);

        (this.m_Background && this.m_BackgroundColor) ? container.style.backgroundColor = this.m_BackgroundColor : "";
        (this.m_Flex) ? container.classList.add('flex') : container.classList.add('no-flex');

        container.innerHTML = "<div class='modal' id='modal'></div>";
        let modal = document.getElementById("modal");
        (this.m_Padding) ? modal.style["padding"] = this.m_Padding + "px" : "";
        (this.m_Margin) ? modal.style["margin"] = this.m_Margin + "px" : "";
    }

    destroyModal()
    {
        document.getElementById(this.name).remove();
    }
}

function createLoginModal(e)
{
    e.preventDefault();

    let modal = new Modal('login');
    modal.settings({
        padding: 10,
        margin: 0,
        flex: true,
        background: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        closeIcon: true
    });

    modal.addContent({
        header: "<div class='modal__header'></div>",
        body: "<div class='modal__body'></div>",
        footer: "<div class='modal__footer'></div>"
    });
}