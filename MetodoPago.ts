interface MetodoPago{
    realizarPago(): any|void;
    autorizarPago(): any|void;
    transferirPago(): any|void;
    obtenerSaldoDisponible?(): any|void;
    calcularInteres?(): any|void;
    verificarSaldoSuficiente?(): any|void;
    realizarTransferencia?(): any|void;
    registrarMontoRecibido?(): any|void;
}

interface MetodoPagoFactory{
    crearMetodoPago(): MetodoPago;
}

class TarjetaCredito implements MetodoPago {
    realizarPago(): any|void{
        console.log("Pago realizado con tarjeta de credito");
    }
    autorizarPago(): any|void{
        console.log("Pago autorizado con tarjeta de credito");
    }
    transferirPago(): any|void{
        console.log("Pago transferido con tarjeta de credito");
    }
    obtenerSaldoDisponible(){
        console.log("Saldo disponible");
    }
}

class MercadoCredito implements MetodoPago{
    realizarPago(): any|void{
        console.log("Pago realizado con mercado credito");
    }
    autorizarPago(): any|void{
        console.log("Pago autorizado con mercado credito");
    }
    transferirPago(): any|void{
        console.log("Pago transferido con mercado credito");
    }
    calcularInteres(){
        console.log("Interes calculado");
    }
}

class DineroCuenta implements MetodoPago {
    realizarPago(): any|void{
        console.log("Pago realizado con dinero de cuenta");
    }
    autorizarPago(): any|void{
        console.log("Pago autorizado con dinero de cuenta");
    }
    transferirPago(): any|void{
        console.log("Pago transferido con dinero de cuenta");
    }
    verificarSaldoSuficiente(){
        console.log("Saldo suficiente");
    }
    realizarTransferencia(){
        console.log("Transferencia realizada");
    }
}

class PagoEfectivo implements MetodoPago{
    realizarPago(): any|void{
        console.log("Pago realizado con efectivo");
    }
    autorizarPago(): any|void{
        console.log("Pago autorizado con efectivo");
    }
    transferirPago(): any|void{
        console.log("Pago transferido con efectivo");
    }
    registrarMontoRecibido(){
        console.log("Monto recibido registrado");
    }
}

class TarjetaDebito implements MetodoPago{
    realizarPago(): any|void{
        console.log("Pago realizado con tarjeta de debito");
    }
    autorizarPago(): any|void{
        console.log("Pago autorizado con tarjeta de debito");
    }
    transferirPago(): any|void{
        console.log("Pago transferido con tarjeta de debito");
    }
    verificarSaldoDisponible(){
        console.log("Saldo disponible");
    }
}

class TarjetaCreditoFactory implements MetodoPagoFactory{
    crearMetodoPago(): TarjetaCredito{
        return new TarjetaCredito();
    }
}

class MercadoCreditoFactory implements MetodoPagoFactory{
    crearMetodoPago(): MercadoCredito{
        return new MercadoCredito();
    }
}

class TarjetaDebitoFactory implements MetodoPagoFactory{ 
    crearMetodoPago(): TarjetaDebito{
        return new TarjetaDebito();
    }
}

class PagoEfectivoFactory implements MetodoPagoFactory{
    crearMetodoPago(): PagoEfectivo{
        return new PagoEfectivo();
    }
}

class DineroCuentaFactory implements MetodoPagoFactory{
    crearMetodoPago(): DineroCuenta{
        return new DineroCuenta();
    }
}

class Cliente {
    metodoPago: MetodoPago;
    
    constructor(metodoPagoFactory: MetodoPagoFactory) {
        this.metodoPago = metodoPagoFactory.crearMetodoPago();
    }
    
    realizarPago(): void {
        this.metodoPago.realizarPago();
    }

    autorizarPago(): void {
        this.metodoPago.autorizarPago();
    }

    transferirPago(): void {
        this.metodoPago.transferirPago();
    }

    obtenerSaldoDisponible(): void {
        if (this.metodoPago.obtenerSaldoDisponible) {
            this.metodoPago.obtenerSaldoDisponible();
        } else {
            console.log("El método obtenerSaldoDisponible no es compatible con este método de pago.");
        }
    }

    calcularInteres(): void {
        if (this.metodoPago.calcularInteres) {
            this.metodoPago.calcularInteres();
        } else {
            console.log("El método calcularInteres no es compatible con este método de pago.");
        }
    }

    verificarSaldoSuficiente(): void {
        if (this.metodoPago.verificarSaldoSuficiente) {
            this.metodoPago.verificarSaldoSuficiente();
        } else {
            console.log("El método verificarSaldoSuficiente no es compatible con este método de pago.");
        }
    }

    realizarTransferencia(): void {
        if (this.metodoPago.realizarTransferencia) {
            this.metodoPago.realizarTransferencia();
        } else {
            console.log("El método realizarTransferencia no es compatible con este método de pago.");
        }
    }

    registrarMontoRecibido(): void {
        if (this.metodoPago.registrarMontoRecibido) {
            this.metodoPago.registrarMontoRecibido();
        } else {
            console.log("El método registrarMontoRecibido no es compatible con este método de pago.");
        }
    }
}

let cliente = new Cliente(new TarjetaCreditoFactory());
cliente.realizarPago();

cliente = new Cliente(new MercadoCreditoFactory());
cliente.realizarPago();

cliente = new Cliente(new DineroCuentaFactory());
cliente.calcularInteres();  

cliente = new Cliente(new PagoEfectivoFactory());
cliente.realizarPago(); 

cliente = new Cliente(new TarjetaDebitoFactory());
cliente.realizarPago();  

