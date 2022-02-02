interface Alert {
    render() : void;
    onClick() : void;
}

class MaterialAlert implements Alert {
    render(): void {
        alert("Renderizar alerta do MATERIAL");
    }
    onClick(): void {
        throw new Error("Method not implemented.");
    }
}

class CupertinoAlert implements Alert {
    render(): void {
        alert("Renderizar alerta do CUPERTINO");
    }
    onClick(): void {
        throw new Error("Method not implemented.");
    }
}

interface AlertFactory {
    createAlert() : Alert
}

class MaterialAlertFactory implements AlertFactory {
    createAlert(): Alert {
        return new MaterialAlert();
    }
}

class CupertinoAlertFactory implements AlertFactory {
    createAlert(): Alert {
        return new CupertinoAlert();
    }
}

const OS : string = "android";
var alertFactory : AlertFactory;

switch (OS) {
    case "android": alertFactory = new MaterialAlertFactory(); break;
    case "ios": alertFactory = new CupertinoAlertFactory(); break;
    default: throw new Error(`Não há implementação de dialog para o sistema ${OS}`)
}

const alertObject = alertFactory.createAlert();
alertObject.render();