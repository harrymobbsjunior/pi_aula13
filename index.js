function cliente(conta, tipoConta, saldo, nome) {
    this.conta = conta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.nome = nome;
}

let cliente1 = new cliente(5486273622, 'Conta Corrente', '27771', 'Abigael Natte');
let cliente2 = new cliente(1183971869, 'Conta Poupança', '8675', 'Ramon Connell');
let cliente3 = new cliente(9582019689, 'Conta Poupança', '27363', 'Jarret Lafuente');
let cliente4 = new cliente(1761924656, 'Conta Poupança', '32415', 'Ansel Ardley');
let cliente5 = new cliente(7401971607, 'Conta Poupança', '18789', 'Jacki Shurmer');
let cliente6 = new cliente(630841470, 'Conta Corrente', '28776', 'Jobi Mawtus');
let cliente7 = new cliente(4223508636, 'Conta Corrente', '2177', 'Thomasin Latour');
let cliente8 = new cliente(185979521, 'Conta Poupança', '25994', 'Lonnie Verheijden');
let cliente9 = new cliente(3151956165, 'Conta Corrente', '7601', 'Alonso Wannan');
let cliente10 = new cliente(2138105881, 'Conta Poupança', '33196', 'Bendite Huggett');

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
        for (var i = 0; i < this.listaClientes.lenght; i++) {
            const cliente = this.listaClientes[i];;
            if (cliente.nome == nome) {
                console.log(cliente);
                return cliente;
            }else {
                console.log("erro");
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
        // cliente.saldo += valor;
        // console.log("Depósito realizado, seu novo saldo é: " + cliente.saldo);
    }
}

//console.log(banco);
banco.consultarCliente("Bendite Huggett");
//banco.deposito("Bendite Huggett", 50.10);
//banco.saque("Bendite Huggett", 50);



