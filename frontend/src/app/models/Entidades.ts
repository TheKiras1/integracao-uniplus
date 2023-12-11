export interface Entidade {
  bairro?: string;
  bairroCobranca?: string;
  bairroEntrega?: string;
  celular?: string;
  celularEntrega?: string;
  cep?: string;
  cepCobranca?: string;
  cepEntrega?: string;
  cidade?: string;
  cidadeCobranca?: string;
  cidadeEntrega?: string;
  cnpjCpf?: string;
  codigo: string;
  complemento?: string;
  complementoCobranca?: string;
  complementoEntrega?: string;
  conjuge?: string;
  contatoCobranca?: string;
  contatoEntrega?: string;
  dataNascimento?: string;
  email?: string;
  emailEntrega?: string;
  endereco?: string;
  enderecoCobranca?: string;
  enderecoEntrega?: string;
  estado?: string;
  estadoCivil?: number;
  estadoCobranca?: string;
  estadoEntrega?: string;
  extra1?: string;
  extra2?: string;
  extra3?: string;
  extra4?: string;
  extra5?: string;
  extra6?: string;
  fax?: string;
  faxEntrega?: string;
  inativo: number;
  inscricaoEstadual?: string;
  limiteCredito?: number;
  mae?: string;
  nome: string;
  nomeContato?: string;
  numeroCobranca?: string;
  numeroEndereco?: string;
  numeroEntrega?: string;
  observacao?: string;
  pai?: string;
  profissao?: string;
  razaoSocial?: string;
  renda?: number;
  rg?: string;
  telefone?: string;
  telefoneEntrega?: string;
  tipo: string;
  usuario?: string;
  creditoRestrito?: number;
}

export enum Inativo {
  Ativo = 0,
  Inativo = 1,
}

export enum TipoEntidade {
  Cliente = 1,
  Fornecedor = 2,
  Transportadora = 3,
  Vendedor = 4,
  Técnico = 5,
  Fabricante = 6,
}
