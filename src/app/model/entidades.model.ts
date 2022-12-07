export class FuncionarioResponse {
    id = 0;
    nome = '';
    funcao = '';
    dataContrato = new Date;
}

export class BaseEndereco {
    id = 0;
    cep = '';
    logradouro = '';
    bairro = '';
    cidade = '';
    estado = '';
}

export class Pessoa {
    codigo = 0;
    contato = new Contato;
    nome = '';
    cep = '';
    logradouro = '';
    numeroCasa = 0;
    bairro = '';
    cidade = '';
    estado = '';
}

export class Paciente extends Pessoa {
    peso = 0.0;
    altura = 0.0;
    tipoSanguineo = '';
}

export class Contato {
    codigo = 0;
    email = '';
    telefone = '';
    celular = ''
}