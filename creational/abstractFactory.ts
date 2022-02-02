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

interface Button {
    onClick() : void;
}

class MaterialButton implements Button {
    onClick(): void {
        alert("onClick botão do MATERIAL");
    }
}

class CupertinoButton implements Button {
    onClick(): void {
        alert("onClick alerta do CUPERTINO");
    }
}

interface DatePicker {
    onChooseData() : void;
}

class MaterialDatePicker implements DatePicker {
    onChooseData(): void {
        alert("onChooseData date picker do MATERIAL");
    }
}

class CupertinoDatePicker implements DatePicker {
    onChooseData(): void {
        alert("onChooseData date picker do CUPERTINO");
    }
}

interface NativeUIFactory {
    createAlert() : Alert;
    createButton() : Button;
    createDatePicker() : DatePicker;
}

class MaterialFactory implements NativeUIFactory {
    createAlert(): Alert {
        return new MaterialAlert();
    }
    createButton(): Button {
        return new MaterialButton();
    }
    createDatePicker(): DatePicker {
        return new MaterialDatePicker();
    }
}

class CupertinoFactory implements NativeUIFactory {
    createAlert(): Alert {
        return new CupertinoAlert();
    }
    createButton(): Button {
        return new CupertinoButton();
    }
    createDatePicker(): DatePicker {
        return new CupertinoDatePicker();
    }
}

const OS : string = "android";
var uiFactory : NativeUIFactory;

switch (OS) {
    case "android": uiFactory = new MaterialFactory(); break;
    case "ios": uiFactory = new CupertinoFactory(); break;
    default: throw new Error(`Não há implementação de factory para o sistema ${OS}`)
}

const alertObject = uiFactory.createAlert();
const buttonObject = uiFactory.createButton();
const datePickerObject = uiFactory.createDatePicker();

alertObject.render();
buttonObject.onClick();
datePickerObject.onChooseData();