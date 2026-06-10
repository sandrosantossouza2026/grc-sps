export interface Sinistro {
  nome: string
  cpf: string
  apolice: string
  tipo: string
  veiculo: string
  placa: string
  valorVeiculo: number
  natureza: string
  scoreCredito: string
  pendencia: number
  processo: string
  score: number
  decisao: 'verde' | 'amarelo' | 'vermelho'
}

export interface Monitorado {
  nome: string
  cpf: string
  apolice: string
  tipo: string
  veiculo: string
  placa: string
  valorVeiculo: number
  scoreCredito: string
  pendencia: number
  processo: string
  atendimento24h: string
  gps: string
  vistoria: string
  sddr: number
  status: 'estavel' | 'atencao' | 'degradacao' | 'critico'
  acao: string
}

export const sinistros: Sinistro[] = [
  { nome:'João Pedro Castanha', cpf:'231.231.231-78', apolice:'53147268988', tipo:'Veículo', veiculo:'Honda Fit', placa:'EUF-3371', valorVeiculo:45000, natureza:'Colisão Integral', scoreCredito:'Caiu para 120', pendencia:230000, processo:'Roubo a mão armada', score:9, decisao:'vermelho' },
  { nome:'Alexandre Brandão', cpf:'231.231.231-79', apolice:'53147268989', tipo:'Taxi', veiculo:'Hyundai Tucson', placa:'EUF-3372', valorVeiculo:85000, natureza:'Furto', scoreCredito:'Caiu para 32', pendencia:148000, processo:'Estelionato', score:8, decisao:'vermelho' },
  { nome:'Ana Paula Tedesco', cpf:'231.231.231-80', apolice:'53147268990', tipo:'Caminhão', veiculo:'Mercedes-Benz 2651', placa:'EUF-3373', valorVeiculo:980000, natureza:'Incêndio', scoreCredito:'Caiu para 74', pendencia:0, processo:'Formação de Quadrilha', score:9, decisao:'vermelho' },
  { nome:'Jurandir Fonseca', cpf:'231.231.231-81', apolice:'53147268991', tipo:'Moto', veiculo:'BMW K1600 GTL', placa:'EUF-3374', valorVeiculo:328000, natureza:'Roubo', scoreCredito:'Caiu para 75', pendencia:0, processo:'Mandado de Prisão', score:8, decisao:'vermelho' },
  { nome:'Enzo Fidel', cpf:'231.231.231-78', apolice:'53147268992', tipo:'Veículo', veiculo:'BMW X1', placa:'JYL-4567', valorVeiculo:340000, natureza:'Roubo', scoreCredito:'Caiu para 76', pendencia:590000, processo:'Roubo a mão armada', score:9, decisao:'vermelho' },
  { nome:'Lorenzo Tedesco', cpf:'231.231.231-79', apolice:'53147268993', tipo:'Veículo', veiculo:'BMW X2', placa:'JYL-4568', valorVeiculo:470000, natureza:'Roubo', scoreCredito:'Caiu para 77', pendencia:732000, processo:'Mandado de Prisão', score:8, decisao:'vermelho' },
  { nome:'João Paulo Castanha', cpf:'231.231.231-80', apolice:'53147268994', tipo:'Veículo', veiculo:'BMW X3', placa:'JYL-4569', valorVeiculo:520000, natureza:'Roubo', scoreCredito:'Caiu para 78', pendencia:290000, processo:'Mandado de Prisão', score:7, decisao:'amarelo' },
  { nome:'Jose Geraldo Firmino', cpf:'231.231.231-81', apolice:'53147268995', tipo:'Veículo', veiculo:'BMW X4', placa:'JYL-4570', valorVeiculo:660000, natureza:'Furto', scoreCredito:'Caiu para 79', pendencia:450000, processo:'Mandado de Prisão', score:6, decisao:'amarelo' },
  { nome:'Jose da Silva', cpf:'231.231.231-82', apolice:'53147268996', tipo:'Veículo', veiculo:'BMW X5', placa:'JYL-4571', valorVeiculo:863000, natureza:'Roubo', scoreCredito:'Caiu para 80', pendencia:345000, processo:'Mandado de Prisão', score:7, decisao:'amarelo' },
  { nome:'Bruno da Silva', cpf:'231.231.231-83', apolice:'53147268997', tipo:'Veículo', veiculo:'AUDI Q7', placa:'JYL-4572', valorVeiculo:578000, natureza:'Roubo', scoreCredito:'Caiu para 81', pendencia:231000, processo:'Mandado de Prisão', score:6, decisao:'amarelo' },
  { nome:'Marcio da Silva', cpf:'231.231.231-84', apolice:'53147268998', tipo:'Veículo', veiculo:'AUDI Q8', placa:'JYL-4573', valorVeiculo:819000, natureza:'Incêndio', scoreCredito:'Caiu para 82', pendencia:82000, processo:'Tráfico de Drogas', score:7, decisao:'amarelo' },
  { nome:'Fernando Souza', cpf:'231.231.231-85', apolice:'53147268999', tipo:'Veículo', veiculo:'AUDI Q7', placa:'JYL-4574', valorVeiculo:730000, natureza:'Roubo', scoreCredito:'Caiu para 83', pendencia:185000, processo:'Tráfico de Drogas', score:5, decisao:'amarelo' },
]

export const monitorados: Monitorado[] = [
  { nome:'João Pedro Castanha', cpf:'231.231.231-78', apolice:'53147268988', tipo:'Veículo', veiculo:'Honda Fit', placa:'EUF-3371', valorVeiculo:45000, scoreCredito:'Caiu para 120', pendencia:230000, processo:'Roubo a mão armada', atendimento24h:'', gps:'Perdeu Sinal', vistoria:'', sddr:88, status:'critico', acao:'Acionar jurídico e sinistros' },
  { nome:'Alexandre Brandão', cpf:'231.231.231-79', apolice:'53147268989', tipo:'Taxi', veiculo:'Hyundai Tucson', placa:'EUF-3372', valorVeiculo:85000, scoreCredito:'Caiu para 32', pendencia:148000, processo:'Criminal Estelionato', atendimento24h:'', gps:'', vistoria:'Condutor de 18 não consta em apólice', sddr:75, status:'degradacao', acao:'Alertar prevenção a fraudes' },
  { nome:'Ana Paula Tedesco', cpf:'231.231.231-80', apolice:'53147268990', tipo:'Caminhão', veiculo:'Mercedes-Benz 2651', placa:'EUF-3373', valorVeiculo:980000, scoreCredito:'Caiu para 74', pendencia:0, processo:'Formação de Quadrilha', atendimento24h:'Condutor embriagado', gps:'', vistoria:'', sddr:70, status:'degradacao', acao:'Alertar prevenção a fraudes' },
  { nome:'Jurandir Fonseca', cpf:'231.231.231-81', apolice:'53147268991', tipo:'Moto', veiculo:'BMW K1600 GTL', placa:'EUF-3374', valorVeiculo:328000, scoreCredito:'Caiu para 75', pendencia:0, processo:'Mandado de prisão', atendimento24h:'', gps:'Perdeu Sinal', vistoria:'', sddr:82, status:'critico', acao:'Mitigação + instalar GPS' },
  { nome:'Enzo Fidel', cpf:'231.231.231-78', apolice:'53147268992', tipo:'Veículo', veiculo:'BMW X1', placa:'JYL-4567', valorVeiculo:340000, scoreCredito:'Caiu para 76', pendencia:590000, processo:'Roubo a mão armada', atendimento24h:'Visto arma no carro', gps:'', vistoria:'Visto arma no carro', sddr:95, status:'critico', acao:'Acionar jurídico imediatamente' },
  { nome:'Lorenzo Tedesco', cpf:'231.231.231-79', apolice:'53147268993', tipo:'Veículo', veiculo:'BMW X2', placa:'JYL-4568', valorVeiculo:470000, scoreCredito:'Caiu para 77', pendencia:732000, processo:'Mandado de prisão', atendimento24h:'Rodas fora do permitido', gps:'Perdeu Sinal', vistoria:'', sddr:90, status:'critico', acao:'Acionar jurídico e sinistros' },
  { nome:'João Paulo Castanha', cpf:'231.231.231-80', apolice:'53147268994', tipo:'Veículo', veiculo:'BMW X3', placa:'JYL-4569', valorVeiculo:520000, scoreCredito:'Caiu para 78', pendencia:290000, processo:'Mandado de prisão', atendimento24h:'Drogas no veículo', gps:'Perdeu Sinal', vistoria:'', sddr:78, status:'degradacao', acao:'Alertar prevenção a fraudes' },
  { nome:'Jose Geraldo Firmino', cpf:'231.231.231-81', apolice:'53147268995', tipo:'Veículo', veiculo:'BMW X4', placa:'JYL-4570', valorVeiculo:660000, scoreCredito:'Caiu para 79', pendencia:450000, processo:'Mandado de prisão', atendimento24h:'', gps:'', vistoria:'', sddr:45, status:'atencao', acao:'Monitorar + enviar alerta' },
  { nome:'Jose da Silva', cpf:'231.231.231-82', apolice:'53147268996', tipo:'Veículo', veiculo:'BMW X5', placa:'JYL-4571', valorVeiculo:863000, scoreCredito:'Caiu para 80', pendencia:345000, processo:'Mandado de prisão', atendimento24h:'', gps:'Perdeu Sinal', vistoria:'', sddr:80, status:'degradacao', acao:'Mitigação + instalar GPS' },
  { nome:'Bruno da Silva', cpf:'231.231.231-83', apolice:'53147268997', tipo:'Veículo', veiculo:'AUDI Q7', placa:'JYL-4572', valorVeiculo:578000, scoreCredito:'Caiu para 81', pendencia:231000, processo:'Mandado de prisão', atendimento24h:'', gps:'Perdeu Sinal', vistoria:'', sddr:76, status:'degradacao', acao:'Alertar prevenção a fraudes' },
  { nome:'Marcio da Silva', cpf:'231.231.231-84', apolice:'53147268998', tipo:'Veículo', veiculo:'AUDI Q8', placa:'JYL-4573', valorVeiculo:819000, scoreCredito:'Caiu para 82', pendencia:82000, processo:'Tráfico de Drogas', atendimento24h:'', gps:'', vistoria:'', sddr:40, status:'atencao', acao:'Monitorar + enviar alerta' },
  { nome:'Fernando Souza', cpf:'231.231.231-85', apolice:'53147268999', tipo:'Veículo', veiculo:'AUDI Q7', placa:'JYL-4574', valorVeiculo:730000, scoreCredito:'Caiu para 83', pendencia:185000, processo:'Tráfico de Drogas', atendimento24h:'', gps:'', vistoria:'', sddr:55, status:'atencao', acao:'Monitorar + enviar alerta' },
]
