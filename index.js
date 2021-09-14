function cliente(conta, tipoConta, saldo, nome) {
    this.conta = conta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.nome = nome;
}

let cliente1 = new cliente(5486273622, 'Conta Corrente', 277.71, 'Abigael Natte');
let cliente2 = new cliente(1183971869, 'Conta Poupança', 867.5, 'Ramon Connell');
let cliente3 = new cliente(9582019689, 'Conta Poupança', 273.63, 'Jarret Lafuente');
let cliente4 = new cliente(1761924656, 'Conta Poupança', 324.15, 'Ansel Ardley');
let cliente5 = new cliente(7401971607, 'Conta Poupança', 187.89, 'Jacki Shurmer');
let cliente6 = new cliente(630841470, 'Conta Corrente', 287.76, 'Jobi Mawtus');
let cliente7 = new cliente(4223508636, 'Conta Corrente', 217.7, 'Thomasin Latour');
let cliente8 = new cliente(185979521, 'Conta Poupança', 259.94, 'Lonnie Verheijden');
let cliente9 = new cliente(3151956165, 'Conta Corrente', 760.1, 'Alonso Wannan');
let cliente10 = new cliente(2138105881, 'Conta Poupança', 331.96, 'Bendite Huggett');

//console.log(cliente1);

let lista = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10];

let lista2 = [];
lista2.push(cliente1);
lista2.push(cliente2);
lista2.push(cliente3);
lista2.push(cliente4);
lista2.push(cliente5);
lista2.push(cliente6);
lista2.push(cliente7);
lista2.push(cliente8);
lista2.push(cliente9);
lista2.push(cliente10);

//console.log(lista2);

let banco = {
    listaClientes: lista,
    consultarCliente: function (nome) {
        //console.log(this.listaClientes.length);
        for (var i = 0; i < this.listaClientes.length; i++) {
            const cliente = this.listaClientes[i];;
            if (cliente.nome == nome) {
                console.log(cliente);
                return cliente;
            }
        }
    },
    deposito: function (nome, valor) {
        const cliente = this.consultarCliente(nome);
        cliente.saldo += valor;
        console.log("Depósito realizado, seu novo saldo é: " + cliente.saldo);
    },
    saque: function (nome, valor) {
        const cliente = this.consultarCliente(nome);
        if(valor > cliente.saldo) {
            console.log("Saldo insuficiente!");
        }else {
            cliente.saldo -= valor;
        }
        console.log("Saque realizado, seu novo saldo é: " + cliente.saldo);
    }
}

//console.log(banco.listaClientes);
//banco.consultarCliente("Bendite Huggett");
//banco.deposito("Bendite Huggett", 150);
//banco.saque("Bendite Huggett", 250);



