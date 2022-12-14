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

export class Agenda {
    codigo = 0;
    codigoMedico = 0;
    data = new Date;
    nome = '';
    email = '';
    telefone = '';
    horario = 0;
}

export class AgendaFilter {
    nome = '';
    data = new Date;
    codigoMedico = 0;
    cep = '';
    numeroCasa = 0;
}

export class Funcionario extends Pessoa {
    dataContrato = new Date;
    salario = 0;
    senhaHash = '';
}

export class PacienteFilter {
    nome = '';
    tipoSanguineo = '';
    peso = 0;
    altura = 0;
    cidade = '';
    estado = '';
    bairro = '';
}

export class FuncionarioFilter {
    nome = '';
    cidade = '';
    estado = '';
    bairro = '';
    salario = 0;
    dataContrato = new Date;
    operadorSalario = '';
    operadorData = '';
}

export class Medico extends Funcionario {
    crm = 0;
    especialidade: Especialidade = new Especialidade;
}

export class Especialidade {
    id = 0;
    nome = '';
}