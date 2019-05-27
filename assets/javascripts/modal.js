class Modal {

    constructor(name, data)
    {
        this.name = name;
    }

    settings( data )
    {
        this.m_Padding = (data.padding) ? data.padding: 10;
        this.m_Margin = (data.margin) ? data.margin: 0;
        this.m_Flex = (data.flex);
        this.m_Background = (data.background);
        this.m_BackgroundColor = (data.backgroundColor) ? (data.background) ? data.backgroundColor : "" : "";
        this.m_CloseIcon = (data.closeIcon);
    }

    addContent( data )
    {
        this.m_Header = (data.header) ? data.header : "";
        this.m_Body = (data.body) ? data.body : "";
        this.m_Footer = (data.footer) ? data.footer : "";
    }

    buildModal()
    {

    }

    destroyModal()
    {
        document.getElementById(this.name).remove();
    }
}

let modal = new Modal('login');

modal.settings({
    padding: 10,
    margin: 10,
    flex: true,
    background: true,
    backgroundColor: "rgba(0,0,0,0.8)",
    closeIcon: true
});

modal.addContent({
    header: "",
    body: "",
    footer: ""
});

modal.buildModal();
//modal.destroyModal();