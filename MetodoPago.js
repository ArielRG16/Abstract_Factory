var TarjetaCredito = /** @class */ (function () {
    function TarjetaCredito() {
    }
    TarjetaCredito.prototype.realizarPago = function () {
        console.log("Pago realizado con tarjeta de credito");
    };
    TarjetaCredito.prototype.autorizarPago = function () {
        console.log("Pago autorizado con tarjeta de credito");
    };
    TarjetaCredito.prototype.transferirPago = function () {
        console.log("Pago transferido con tarjeta de credito");
    };
    TarjetaCredito.prototype.obtenerSaldoDisponible = function () {
        console.log("Saldo disponible");
    };
    return TarjetaCredito;
}());
var MercadoCredito = /** @class */ (function () {
    function MercadoCredito() {
    }
    MercadoCredito.prototype.realizarPago = function () {
        console.log("Pago realizado con mercado credito");
    };
    MercadoCredito.prototype.autorizarPago = function () {
        console.log("Pago autorizado con mercado credito");
    };
    MercadoCredito.prototype.transferirPago = function () {
        console.log("Pago transferido con mercado credito");
    };
    MercadoCredito.prototype.calcularInteres = function () {
        console.log("Interes calculado");
    };
    return MercadoCredito;
}());
var DineroCuenta = /** @class */ (function () {
    function DineroCuenta() {
    }
    DineroCuenta.prototype.realizarPago = function () {
        console.log("Pago realizado con dinero de cuenta");
    };
    DineroCuenta.prototype.autorizarPago = function () {
        console.log("Pago autorizado con dinero de cuenta");
    };
    DineroCuenta.prototype.transferirPago = function () {
        console.log("Pago transferido con dinero de cuenta");
    };
    DineroCuenta.prototype.verificarSaldoSuficiente = function () {
        console.log("Saldo suficiente");
    };
    DineroCuenta.prototype.realizarTransferencia = function () {
        console.log("Transferencia realizada");
    };
    return DineroCuenta;
}());
var PagoEfectivo = /** @class */ (function () {
    function PagoEfectivo() {
    }
    PagoEfectivo.prototype.realizarPago = function () {
        console.log("Pago realizado con efectivo");
    };
    PagoEfectivo.prototype.autorizarPago = function () {
        console.log("Pago autorizado con efectivo");
    };
    PagoEfectivo.prototype.transferirPago = function () {
        console.log("Pago transferido con efectivo");
    };
    PagoEfectivo.prototype.registrarMontoRecibido = function () {
        console.log("Monto recibido registrado");
    };
    return PagoEfectivo;
}());
var TarjetaDebito = /** @class */ (function () {
    function TarjetaDebito() {
    }
    TarjetaDebito.prototype.realizarPago = function () {
        console.log("Pago realizado con tarjeta de debito");
    };
    TarjetaDebito.prototype.autorizarPago = function () {
        console.log("Pago autorizado con tarjeta de debito");
    };
    TarjetaDebito.prototype.transferirPago = function () {
        console.log("Pago transferido con tarjeta de debito");
    };
    TarjetaDebito.prototype.verificarSaldoDisponible = function () {
        console.log("Saldo disponible");
    };
    return TarjetaDebito;
}());
var TarjetaCreditoFactory = /** @class */ (function () {
    function TarjetaCreditoFactory() {
    }
    TarjetaCreditoFactory.prototype.crearMetodoPago = function () {
        return new TarjetaCredito();
    };
    return TarjetaCreditoFactory;
}());
var MercadoCreditoFactory = /** @class */ (function () {
    function MercadoCreditoFactory() {
    }
    MercadoCreditoFactory.prototype.crearMetodoPago = function () {
        return new MercadoCredito();
    };
    return MercadoCreditoFactory;
}());
var TarjetaDebitoFactory = /** @class */ (function () {
    function TarjetaDebitoFactory() {
    }
    TarjetaDebitoFactory.prototype.crearMetodoPago = function () {
        return new TarjetaDebito();
    };
    return TarjetaDebitoFactory;
}());
var PagoEfectivoFactory = /** @class */ (function () {
    function PagoEfectivoFactory() {
    }
    PagoEfectivoFactory.prototype.crearMetodoPago = function () {
        return new PagoEfectivo();
    };
    return PagoEfectivoFactory;
}());
var DineroCuentaFactory = /** @class */ (function () {
    function DineroCuentaFactory() {
    }
    DineroCuentaFactory.prototype.crearMetodoPago = function () {
        return new DineroCuenta();
    };
    return DineroCuentaFactory;
}());
var Cliente = /** @class */ (function () {
    function Cliente(metodoPagoFactory) {
        this.metodoPago = metodoPagoFactory.crearMetodoPago();
    }
    Cliente.prototype.realizarPago = function () {
        this.metodoPago.realizarPago();
    };
    Cliente.prototype.autorizarPago = function () {
        this.metodoPago.autorizarPago();
    };
    Cliente.prototype.transferirPago = function () {
        this.metodoPago.transferirPago();
    };
    Cliente.prototype.obtenerSaldoDisponible = function () {
        if (this.metodoPago.obtenerSaldoDisponible) {
            this.metodoPago.obtenerSaldoDisponible();
        }
        else {
            console.log("El método obtenerSaldoDisponible no es compatible con este método de pago.");
        }
    };
    Cliente.prototype.calcularInteres = function () {
        if (this.metodoPago.calcularInteres) {
            this.metodoPago.calcularInteres();
        }
        else {
            console.log("El método calcularInteres no es compatible con este método de pago.");
        }
    };
    Cliente.prototype.verificarSaldoSuficiente = function () {
        if (this.metodoPago.verificarSaldoSuficiente) {
            this.metodoPago.verificarSaldoSuficiente();
        }
        else {
            console.log("El método verificarSaldoSuficiente no es compatible con este método de pago.");
        }
    };
    Cliente.prototype.realizarTransferencia = function () {
        if (this.metodoPago.realizarTransferencia) {
            this.metodoPago.realizarTransferencia();
        }
        else {
            console.log("El método realizarTransferencia no es compatible con este método de pago.");
        }
    };
    Cliente.prototype.registrarMontoRecibido = function () {
        if (this.metodoPago.registrarMontoRecibido) {
            this.metodoPago.registrarMontoRecibido();
        }
        else {
            console.log("El método registrarMontoRecibido no es compatible con este método de pago.");
        }
    };
    return Cliente;
}());
var cliente = new Cliente(new TarjetaCreditoFactory());
cliente.realizarPago();
cliente = new Cliente(new MercadoCreditoFactory());
cliente.realizarPago();
cliente = new Cliente(new DineroCuentaFactory());
cliente.calcularInteres();
cliente = new Cliente(new PagoEfectivoFactory());
cliente.realizarPago();
cliente = new Cliente(new TarjetaDebitoFactory());
cliente.realizarPago();
