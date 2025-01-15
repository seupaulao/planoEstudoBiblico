const livrosstring = '{"PP": "Patriarcas e Profetas","PR": "Profetas e Reis", "AA": "Atos dos Apóstolos", "DTD": "O Desejado de Todas as Nações", "PJ": "Parábolas de Jesus","GC": "O Grande Conflito"}';

const planosstring = '{' +
    '"JAN_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"JAN_2": {"CAPBIBLIA":"Salmos 3 a 6", "SIGLAES":"PP", "CAPES":"01", "NOMES":"Porque foi permitido o pecado?"},' +
    '"JAN_3": {"CAPBIBLIA":"Salmos 7 a 8 e Genesis 1", "SIGLAES":"PP", "CAPES":"02", "NOMES":"A Criação"},' +
    '"JAN_4": {"CAPBIBLIA":"Salmos 9 e 10 e Genesis 2", "SIGLAES":"PP", "CAPES":"03", "NOMES":"A Semana Literal"},' +
    '"JAN_5": {"CAPBIBLIA":"Salmos 11 e 12 e Genesis 3", "SIGLAES":"PP", "CAPES":"04", "NOMES":"A Tentação e a Queda"},' +
    '"JAN_6": {"CAPBIBLIA":"Salmos 13 a 16", "SIGLAES":"PP", "CAPES":"05", "NOMES":"O Plano da Redenção"},' +
    '"JAN_7": {"CAPBIBLIA":"Salmos 17 e Genesis 4", "SIGLAES":"PP", "CAPES":"06", "NOMES":"Caim e Abel"},' +
    '"JAN_8": {"CAPBIBLIA":"Salmos 19 a 20 e Genesis 5", "SIGLAES":"PP", "CAPES":"07", "NOMES":"Sete e Enoque"},' +
    '"JAN_9": {"CAPBIBLIA":"Salmos 21 e Genesis 6 e 7", "SIGLAES":"PP", "CAPES":"08", "NOMES":"O Dilúvio"},' +
    '"JAN_10": {"CAPBIBLIA":"Genesis 8 a 10", "SIGLAES":"PP", "CAPES":"09", "NOMES":"Depois do Dilúvio"},' +
    '"JAN_11": {"CAPBIBLIA":"Salmos 24 e Genesis 11", "SIGLAES":"PP", "CAPES":"10", "NOMES":"A Torre de Babel"},' +
    '"JAN_12": {"CAPBIBLIA":"Genesis 12 a 15", "SIGLAES":"PP", "CAPES":"11", "NOMES":"A Vocação de Abraão"},' +
    '"JAN_13": {"CAPBIBLIA":"Genesis 16 a 18", "SIGLAES":"PP", "CAPES":"12", "NOMES":"Abraão em Canaã"},' +
    '"JAN_14": {"CAPBIBLIA":"Genesis 20 a 22", "SIGLAES":"PP", "CAPES":"13", "NOMES":"A Prova de Fé"},' +
    '"JAN_15": {"CAPBIBLIA":"Genesis 19", "SIGLAES":"PP", "CAPES":"14", "NOMES":"A Destruição de Sodoma"},' +
    '"JAN_16": {"CAPBIBLIA":"Genesis 23 a 24", "SIGLAES":"PP", "CAPES":"15", "NOMES":"O Casamento de  Isaque"},' +
    '"JAN_17": {"CAPBIBLIA":"Genesis 25 a 27", "SIGLAES":"PP", "CAPES":"16", "NOMES":"Jacó e Esaú"},' +
    '"JAN_18": {"CAPBIBLIA":"Genesis 28 a 31", "SIGLAES":"PP", "CAPES":"17", "NOMES":"Fuga e Exílio de Jacó"},' +
    '"JAN_19": {"CAPBIBLIA":"Genesis 32 a 34", "SIGLAES":"PP", "CAPES":"18", "NOMES":"A noite de luta"},' +
    '"JAN_20": {"CAPBIBLIA":"Genesis 35 a 38", "SIGLAES":"PP", "CAPES":"19", "NOMES":"A volta para Canaã"},' +
    '"JAN_21": {"CAPBIBLIA":"Genesis 39 a 46", "SIGLAES":"PP", "CAPES":"20", "NOMES":"José no Egito"},' +
    '"JAN_22": {"CAPBIBLIA":"Genesis 47 a 50", "SIGLAES":"PP", "CAPES":"21", "NOMES":"José e seus irmãos"},' +
    '"JAN_23": {"CAPBIBLIA":"Êxodo 1 a 4", "SIGLAES":"PP", "CAPES":"22", "NOMES":"Moisés"},' +
    '"JAN_24": {"CAPBIBLIA":"Êxodo 5 a 8", "SIGLAES":"PP", "CAPES":"23", "NOMES":"As Pragas do Egito"},' +
    '"JAN_25": {"CAPBIBLIA":"Êxodo 9 a 12", "SIGLAES":"PP", "CAPES":"24", "NOMES":"A Páscoa"},' +
    '"JAN_26": {"CAPBIBLIA":"Êxodo 13 a 15", "SIGLAES":"PP", "CAPES":"25", "NOMES":"O Êxodo"},' +
    '"JAN_27": {"CAPBIBLIA":"Êxodo 16 a 18", "SIGLAES":"PP", "CAPES":"26", "NOMES":"Do Mar Vermelho ao Sinai"},' +
    '"JAN_28": {"CAPBIBLIA":"Êxodo 19 a 22", "SIGLAES":"PP", "CAPES":"27", "NOMES":"Israel Recebe a Lei"},' +
    '"JAN_29": {"CAPBIBLIA":"Êxodo 23 a 28", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"JAN_30": {"CAPBIBLIA":"Êxodo 29 a 32", "SIGLAES":"PP", "CAPES":"28", "NOMES":"Idolatria no Sinai"},' +
    '"JAN_31": {"CAPBIBLIA":"Êxodo 33 a 37", "SIGLAES":"PP", "CAPES":"29", "NOMES":"Inimizade de Satanás contra a Lei de Deus"},' +
    '"FEV_1": {"CAPBIBLIA":"Êxodo 38 a 40", "SIGLAES":"PP", "CAPES":"30", "NOMES":"O Tabernáculo e Seus Serviços"},' +
    '"FEV_2": {"CAPBIBLIA":"Levítico 1 a 7", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_3": {"CAPBIBLIA":"Levítico 8 a 11", "SIGLAES":"PP", "CAPES":"31", "NOMES":"O Pecado de Nadabe e Abiú"},' +
    '"FEV_4": {"CAPBIBLIA":"Levítico 12 a 15", "SIGLAES":"PP", "CAPES":"32", "NOMES":"A Lei e os Concertos"},' +
    '"FEV_5": {"CAPBIBLIA":"Números 1 a 4", "SIGLAES":"PP", "CAPES":"33", "NOMES":"Do Sinal a Cades"},' +
    '"FEV_6": {"CAPBIBLIA":"Números 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_7": {"CAPBIBLIA":"Números 13 a 14 e Deuteronômio 1", "SIGLAES":"PP", "CAPES":"34", "NOMES":"Os Doze Espias"},' +
    '"FEV_8": {"CAPBIBLIA":"Números 15 a 17", "SIGLAES":"PP", "CAPES":"35", "NOMES":"A Rebelião de Coré"},' +
    '"FEV_9": {"CAPBIBLIA":"Números 18 e 19 e Deuteronômio 2", "SIGLAES":"PP", "CAPES":"36", "NOMES":"No Deserto"},' +
    '"FEV_10": {"CAPBIBLIA":"Números 20, 29 e 30", "SIGLAES":"PP", "CAPES":"37", "NOMES":"A Rocha Ferida"},' +
    '"FEV_11": {"CAPBIBLIA":"Números 21:01-30, 31 a 33", "SIGLAES":"PP", "CAPES":"38", "NOMES":"A Jornada em redor de Edom"},' +
    '"FEV_12": {"CAPBIBLIA":"Números 21:31-35, 34 a 36", "SIGLAES":"PP", "CAPES":"39", "NOMES":"A Conquista de Basã"},' +
    '"FEV_13": {"CAPBIBLIA":"Números 22 a 24", "SIGLAES":"PP", "CAPES":"40", "NOMES":"Balaão"},' +
    '"FEV_14": {"CAPBIBLIA":"Números 25 a 28", "SIGLAES":"PP", "CAPES":"41", "NOMES":"Apostasia no Jordão"},' +
    '"FEV_15": {"CAPBIBLIA":"Deuteronômio 3 a 5", "SIGLAES":"PP", "CAPES":"14", "NOMES":"A repetição da Lei"},' +
    '"FEV_16": {"CAPBIBLIA":"Deuteronômio 6 a 13", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_17": {"CAPBIBLIA":"Deuteronômio 14 a 17", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_18": {"CAPBIBLIA":"Deuteronômio 18 a 29", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_19": {"CAPBIBLIA":"Deuteronômio 30 a 34", "SIGLAES":"PP", "CAPES":"43", "NOMES":"A Morte de Moisés"},' +
    '"FEV_20": {"CAPBIBLIA":"Josué 1 a 4", "SIGLAES":"PP", "CAPES":"44", "NOMES":"A Travessia do Jordão"},' +
    '"FEV_21": {"CAPBIBLIA":"Josué 5 a 7", "SIGLAES":"PP", "CAPES":"45", "NOMES":"A Queda de Jericó"},' +
    '"FEV_22": {"CAPBIBLIA":"Josué 8 a 11", "SIGLAES":"PP", "CAPES":"46", "NOMES":"As bênçãos e as maldições"},' +
    '"FEV_23": {"CAPBIBLIA":"Josué 12 a 17", "SIGLAES":"PP", "CAPES":"47", "NOMES":"Aliança com os Gebeonitas"},' +
    '"FEV_24": {"CAPBIBLIA":"Josué 18 a 21", "SIGLAES":"PP", "CAPES":"48", "NOMES":"A divisão de Canaã"},' +
    '"FEV_25": {"CAPBIBLIA":"Josué 22 a 24", "SIGLAES":"PP", "CAPES":"49", "NOMES":"Prefacio"},' +
    '"FEV_26": {"CAPBIBLIA":"Deut. 14:22-29; Núm. 18:21-32, Lev. 17 a 20; 27:30-34", "SIGLAES":"PP", "CAPES":"50", "NOMES":"O Dízimo"},' +
    '"FEV_27": {"CAPBIBLIA":"Levítico 25 e 26", "SIGLAES":"PP", "CAPES":"51", "NOMES":"O Cuidado de Deus para com os  pobres"},' +
    '"FEV_28": {"CAPBIBLIA":"Levítico 21 a 24", "SIGLAES":"PP", "CAPES":"52", "NOMES":"As Festas Anuais"},' +
    '"MAR_1": {"CAPBIBLIA":"Juízes 1 a 4", "SIGLAES":"PP", "CAPES":"53", "NOMES":"Os primeiros juízes"},' +
    '"MAR_2": {"CAPBIBLIA":"Juízes 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_3": {"CAPBIBLIA":"Juízes 13 a 16", "SIGLAES":"PP", "CAPES":"54", "NOMES":"Sansão"},' +
    '"MAR_4": {"CAPBIBLIA":"Salmos 17 a 21", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_5": {"CAPBIBLIA":"Rute 1 e 2 e I Samuel 1", "SIGLAES":"PP", "CAPES":"55", "NOMES":"O Menino Samuel"},' +
    '"MAR_6": {"CAPBIBLIA":"Rute 3 e 4 e I Samuel 2", "SIGLAES":"PP", "CAPES":"56", "NOMES":"Eli e seus filhos"},' +
    '"MAR_7": {"CAPBIBLIA":"I Samuel 3 a 6; I Crônicas 13 a 15", "SIGLAES":"PP", "CAPES":"57", "NOMES":"A Arca tomada pelos filisteus"},' +
    '"MAR_8": {"CAPBIBLIA":"I Reis 4:38-41; II Reis 2:15-18; I Samuel 7 a 9", "SIGLAES":"PP", "CAPES":"58", "NOMES":"A Escola dos Profetas"},' +
    '"MAR_9": {"CAPBIBLIA":"I Samuel 10 a 12", "SIGLAES":"PP", "CAPES":"59", "NOMES":"O Primeiro Rei de Israel"},' +
    '"MAR_10": {"CAPBIBLIA":"I Samuel 13 a 14", "SIGLAES":"PP", "CAPES":"60", "NOMES":"A Presunção de Saul"},' +
    '"MAR_11": {"CAPBIBLIA":"I Samuel 15", "SIGLAES":"PP", "CAPES":"61", "NOMES":"A Rejeição de Saul"},' +
    '"MAR_12": {"CAPBIBLIA":"I Samuel 16", "SIGLAES":"PP", "CAPES":"62", "NOMES":"A Unção de Davi"},' +
    '"MAR_13": {"CAPBIBLIA":"I Samuel 17 a 19", "SIGLAES":"PP", "CAPES":"63", "NOMES":"Davi e Golias"},' +
    '"MAR_14": {"CAPBIBLIA":"Salmos 34 e 57; I Samuel 20 a 22", "SIGLAES":"PP", "CAPES":"64", "NOMES":"A Fuga de Davi"},' +
    '"MAR_15": {"CAPBIBLIA":"Salmos 121 e I Samuel 23 a 26", "SIGLAES":"PP", "CAPES":"65", "NOMES":"A Magnanimidade de Davi"},' +
    '"MAR_16": {"CAPBIBLIA":"I Samuel 27 e 31 e I Crônicas 10", "SIGLAES":"PP", "CAPES":"66", "NOMES":"A Morte de Saul"},' +
    '"MAR_17": {"CAPBIBLIA":"I Samuel 28", "SIGLAES":"PP", "CAPES":"67", "NOMES":"Feitiçaria Antiga e Moderna"},' +
    '"MAR_18": {"CAPBIBLIA":"I Samuel 29 e 30 e II Samuel 1", "SIGLAES":"PP", "CAPES":"68", "NOMES":"Davi em Ziclague"},' +
    '"MAR_19": {"CAPBIBLIA":"II Samuel 2 a 5 e I Crônicas 11", "SIGLAES":"PP", "CAPES":"69", "NOMES":"Davi chamado ao trono"},' +
    '"MAR_20": {"CAPBIBLIA":"II Samuel 6 a 10 e I Crônicas 12, 16 e 17", "SIGLAES":"PP", "CAPES":"70", "NOMES":"O Reinado de Davi"},' +
    '"MAR_21": {"CAPBIBLIA":"Salmos 32 e 51, II Samuel 11 a 14", "SIGLAES":"PP", "CAPES":"71", "NOMES":"O Pecado e Arrependimento de Davi"},' +
    '"MAR_22": {"CAPBIBLIA":"Salmos 3, II Samuel 15 a 20", "SIGLAES":"PP", "CAPES":"72", "NOMES":"Rebelião de Absalão"},' +
    '"MAR_23": {"CAPBIBLIA":"Salmos 18, II Samuel 21 a 24", "SIGLAES":"PP", "CAPES":"73", "NOMES":"Os Últimos anos de Davi"},' +
    '"MAR_24": {"CAPBIBLIA":"I Reis 1 a 3", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_25": {"CAPBIBLIA":"II Crônicas 1, I Reis 4 a 6", "SIGLAES":"PR", "CAPES":"01", "NOMES":"Salomão"},' +
    '"MAR_26": {"CAPBIBLIA":"II Crônicas 2, I Reis 7 e 8", "SIGLAES":"PR", "CAPES":"02", "NOMES":"O Templo e sua Dedicação"},' +
    '"MAR_27": {"CAPBIBLIA":"II Crônicas 3, I Reis 9 e 10", "SIGLAES":"PR", "CAPES":"03", "NOMES":"Orgulho da Prosperidade"},' +
    '"MAR_28": {"CAPBIBLIA":"II Crônicas 4 e 5, I Reis 11", "SIGLAES":"PR", "CAPES":"04", "NOMES":"Resultado da Transgressão"},' +
    '"MAR_29": {"CAPBIBLIA":"II Crônicas 6 a 9", "SIGLAES":"PR", "CAPES":"05", "NOMES":"O Arrependimento"},' +
    '"MAR_30": {"CAPBIBLIA":"I Reis 12 e 13", "SIGLAES":"PR", "CAPES":"06", "NOMES":"O Reino Resgatado"},' +
    '"MAR_31": {"CAPBIBLIA":"II Crônicas 10 e 11, I Reis 14", "SIGLAES":"PR", "CAPES":"07", "NOMES":"Jeroboão"},' +
    '"ABR_1": {"CAPBIBLIA":"II Crônicas 12, I Reis 15 e 16", "SIGLAES":"PR", "CAPES":"08", "NOMES":"Apostasia Nacional"},' +
    '"ABR_2": {"CAPBIBLIA":"II Crônicas 13 e 14, I Reis 17", "SIGLAES":"PR", "CAPES":"09", "NOMES":"Elias o Tesbita"},' +
    '"ABR_3": {"CAPBIBLIA":"II Crônicas 15 e 16, I Reis 18:1-19", "SIGLAES":"PR", "CAPES":"10", "NOMES":"A Voz de Severa Repreensão"},' +
    '"ABR_4": {"CAPBIBLIA":"II Crônicas 18 e 19, I Reis 18:20-46", "SIGLAES":"PR", "CAPES":"11", "NOMES":"O Carmelo"},' +
    '"ABR_5": {"CAPBIBLIA":"II Crônicas 20 e 21", "SIGLAES":"PR", "CAPES":"12", "NOMES":"De Jezreel a Horebe"},' +
    '"ABR_6": {"CAPBIBLIA":"II Crônicas 22 e 23 e I Reis 19", "SIGLAES":"PR", "CAPES":"13", "NOMES":"Que Fazer aqui?"},' +
    '"ABR_7": {"CAPBIBLIA":"I Reis 20 a 22", "SIGLAES":"PR", "CAPES":"14", "NOMES":"No Espírito e Virtude de Elias"},' +
    '"ABR_8": {"CAPBIBLIA":"I Crônicas 1 e 2, II Crônicas 17", "SIGLAES":"PR", "CAPES":"15", "NOMES":"Josafá"},' +
    '"ABR_9": {"CAPBIBLIA":"I Crônicas 3 e 4", "SIGLAES":"PR", "CAPES":"16", "NOMES":"A queda da Casa de Acabe"},' +
    '"ABR_10": {"CAPBIBLIA":"I Crônicas 5, II Reis 1 e 2", "SIGLAES":"PR", "CAPES":"17", "NOMES":"O Chamado de Elizeu"},' +
    '"ABR_11": {"CAPBIBLIA":"II Reis 3 e 12", "SIGLAES":"PR", "CAPES":"18", "NOMES":"As Águas Purificadas"},' +
    '"ABR_12": {"CAPBIBLIA":"II Reis 4,13 e 14", "SIGLAES":"PR", "CAPES":"19", "NOMES":"Um Profeta de Paz"},' +
    '"ABR_13": {"CAPBIBLIA":"II Reis 5 a 8", "SIGLAES":"PR", "CAPES":"20", "NOMES":"Naamã"},' +
    '"ABR_14": {"CAPBIBLIA":"II Reis 9 a 11", "SIGLAES":"PR", "CAPES":"21", "NOMES":"O Fim do Ministério de Elizeu"},' +
    '"ABR_15": {"CAPBIBLIA":"Jonas 1 a 4", "SIGLAES":"PR", "CAPES":"22", "NOMES":"A Grande Cidade de Nínive"},' +
    '"ABR_16": {"CAPBIBLIA":"Oséias 1 a 3", "SIGLAES":"PR", "CAPES":"23", "NOMES":"O Cativeiro Assírio"},' +
    '"ABR_17": {"CAPBIBLIA":"Oséias 4 a 10", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"ABR_18": {"CAPBIBLIA":"Oséias 11 a 14", "SIGLAES":"PR", "CAPES":"24", "NOMES":"Destr: Porque lhe Falta Conhecimento"},' +
    '"ABR_19": {"CAPBIBLIA":"Isaías 1 a 6", "SIGLAES":"PR", "CAPES":"25", "NOMES":"O chamado de Isaías"},' +
    '"ABR_20": {"CAPBIBLIA":"Isaías 40 a 42", "SIGLAES":"PR", "CAPES":"26", "NOMES":"Eis aqui está o vosso Deus"},' +
    '"ABR_21": {"CAPBIBLIA":"II Crônicas 28, II Reis 15 a 17", "SIGLAES":"PR", "CAPES":"27", "NOMES":"Acaz"},' +
    '"ABR_22": {"CAPBIBLIA":"Isaías 37 a 39, II Reis 18 a 20", "SIGLAES":"PR", "CAPES":"28", "NOMES":"Ezequias"},' +
    '"ABR_23": {"CAPBIBLIA":"II Crônicas 29 a 32", "SIGLAES":"PR", "CAPES":"29", "NOMES":"Os Embaixadores de Babilônia"},' +
    '"ABR_24": {"CAPBIBLIA":"Naum 1 a 3", "SIGLAES":"PR", "CAPES":"30", "NOMES":"Liberto da Assíria"},' +
    '"ABR_25": {"CAPBIBLIA":"Isaías 7 a 11", "SIGLAES":"PR", "CAPES":"31", "NOMES":"Esperança para os Gentios"},' +
    '"ABR_26": {"CAPBIBLIA":"II Reis 21 a 23", "SIGLAES":"PR", "CAPES":"32", "NOMES":"Manassés e Josias"},' +
    '"ABR_27": {"CAPBIBLIA":"II Crônicas 24 a 27", "SIGLAES":"PR", "CAPES":"33", "NOMES":"O Livro da Lei"},' +
    '"ABR_28": {"CAPBIBLIA":"Jeremias 1 a 3", "SIGLAES":"PR", "CAPES":"34", "NOMES":"Jeremias"},' +
    '"ABR_29": {"CAPBIBLIA":"II Reis 24 e 25", "SIGLAES":"PR", "CAPES":"35", "NOMES":"A Condenação Iminente"},' +
    '"ABR_30": {"CAPBIBLIA":"II Crônicas 33 a 36", "SIGLAES":"PR", "CAPES":"36", "NOMES":"O Último Rei de Judá"},' +
    '"MAI_1": {"CAPBIBLIA":"Jeremias 36 a 38", "SIGLAES":"PR", "CAPES":"37", "NOMES":"Levados Cativos para a Babilônia"},' +
    '"MAI_2": {"CAPBIBLIA":"Jeremias 29 a 32", "SIGLAES":"PR", "CAPES":"38", "NOMES":"Luz em Meio as Trevas"},' +
    '"MAI_3": {"CAPBIBLIA":"I Crônicas 6 a 8, Daniel 1", "SIGLAES":"PR", "CAPES":"39", "NOMES":"Daniel na Corte Babilônica"},' +
    '"MAI_4": {"CAPBIBLIA":"Daniel 2, 7 e 8", "SIGLAES":"PR", "CAPES":"40", "NOMES":"O Sonho de Nabucodonosor"},' +
    '"MAI_5": {"CAPBIBLIA":"I Crônicas 9, Daniel 3", "SIGLAES":"PR", "CAPES":"41", "NOMES":"A Fornalha Ardente"},' +
    '"MAI_6": {"CAPBIBLIA":"Daniel 4", "SIGLAES":"PR", "CAPES":"42", "NOMES":"A Verdadeira Grandeza"},' +
    '"MAI_7": {"CAPBIBLIA":"Daniel 5", "SIGLAES":"PR", "CAPES":"43", "NOMES":"O Vigia Invisível"},' +
    '"MAI_8": {"CAPBIBLIA":"Daniel 6", "SIGLAES":"PR", "CAPES":"44", "NOMES":"Na Cova dos Leões"},' +
    '"MAI_9": {"CAPBIBLIA":"Esdras 1 a 3", "SIGLAES":"PR", "CAPES":"45", "NOMES":"A Volta do Exílio"},' +
    '"MAI_10": {"CAPBIBLIA":"Ageu 1 e 2", "SIGLAES":"PR", "CAPES":"46", "NOMES":"Os Profetas de Deus o ajudavam"},' +
    '"MAI_11": {"CAPBIBLIA":"Zacarias 1 a 4", "SIGLAES":"PR", "CAPES":"47", "NOMES":"Josué e o Anjo"},' +
    '"MAI_12": {"CAPBIBLIA":"Zacarias 5 a 9", "SIGLAES":"PR", "CAPES":"48", "NOMES":"Nem por Força e Nem por Violência"},' +
    '"MAI_13": {"CAPBIBLIA":"Ester 1 a 3", "SIGLAES":"PR", "CAPES":"49", "NOMES":"Nos dias da Rainha Ester"},' +
    '"MAI_14": {"CAPBIBLIA":"Esdras 4 a 6", "SIGLAES":"PR", "CAPES":"50", "NOMES":"Esdras, o Sacerdote e Escriba"},' +
    '"MAI_15": {"CAPBIBLIA":"Esdras 7 a 10", "SIGLAES":"PR", "CAPES":"51", "NOMES":"Um Reavivamento Espiritual"},' +
    '"MAI_16": {"CAPBIBLIA":"Neemias 1 e 2", "SIGLAES":"PR", "CAPES":"52", "NOMES":"Um Homem Oportuno"},' +
    '"MAI_17": {"CAPBIBLIA":"Ester 4, Neemias 3 e 4", "SIGLAES":"PR", "CAPES":"53", "NOMES":"Os Reconstrutores do Muro"},' +
    '"MAI_18": {"CAPBIBLIA":"Ester 5 a 7, Neemias 5", "SIGLAES":"PR", "CAPES":"54", "NOMES":"Condenadas a Extorção"},' +
    '"MAI_19": {"CAPBIBLIA":"Ester 8 a 10, Neemias 6", "SIGLAES":"PR", "CAPES":"55", "NOMES":"Ciladas dos Pagãos"},' +
    '"MAI_20": {"CAPBIBLIA":"Neemias 7 a 10", "SIGLAES":"PR", "CAPES":"56", "NOMES":"Instruídos na Lei de Deus"},' +
    '"MAI_21": {"CAPBIBLIA":"Neemias 11 a 13", "SIGLAES":"PP", "CAPES":"57", "NOMES":"Reforma"},' +
    '"MAI_22": {"CAPBIBLIA":"Zacarias 10 a 14", "SIGLAES":"PP", "CAPES":"58", "NOMES":"A Vinda de um Libertador"},' +
    '"MAI_23": {"CAPBIBLIA":"Malaquias 1 a 4", "SIGLAES":"PP", "CAPES":"59", "NOMES":"A Casa de Israel"},' +
    '"MAI_24": {"CAPBIBLIA":"Isaías 63 a 66", "SIGLAES":"PP", "CAPES":"60", "NOMES":"Visões da Glõria Futura"},' +
    '"MAI_25": {"CAPBIBLIA":"Marcos 1 a 3", "SIGLAES":"DTN", "CAPES":"****", "NOMES":"****"},' +
    '"MAI_26": {"CAPBIBLIA":"Isaías 12 e 13, Mateus 1", "SIGLAES":"DTN", "CAPES":"01", "NOMES":"Deus Conosco"},' +
    '"MAI_27": {"CAPBIBLIA":"Isaías 14 a 16", "SIGLAES":"DTN", "CAPES":"02", "NOMES":"O Povo Escolhido"},' +
    '"MAI_28": {"CAPBIBLIA":"Isaías 17 a 19", "SIGLAES":"DTN", "CAPES":"03", "NOMES":"A Plenitude dos tempos"},' +
    '"MAI_29": {"CAPBIBLIA":"Isaías 20 a 22, Lucas 2:1-20", "SIGLAES":"DTN", "CAPES":"04", "NOMES":"Vos Nasceu Hoje o Salvador"},' +
    '"MAI_30": {"CAPBIBLIA":"Isaías 23 a 25, Lucas 2:21-38", "SIGLAES":"DTN", "CAPES":"05", "NOMES":"A Dedicação"},' +
    '"MAI_31": {"CAPBIBLIA":"Isaías 26 a 28, Mateus 2", "SIGLAES":"DTN", "CAPES":"06", "NOMES":"Vimos a Sua Estrela"},' +
    '"JUN_1": {"CAPBIBLIA":"Isaías 29 e 30, Lucas 2:39-40", "SIGLAES":"DTN", "CAPES":"07", "NOMES":"Em Criança"},' +
    '"JUN_2": {"CAPBIBLIA":"Isaías 31 a 33, Lucas 2:41-52", "SIGLAES":"DTN", "CAPES":"08", "NOMES":"A Visita Pascoal"},' +
    '"JUN_3": {"CAPBIBLIA":"Isaías 34 a 36", "SIGLAES":"DTN", "CAPES":"09", "NOMES":"Dias de Luta"},' +
    '"JUN_4": {"CAPBIBLIA":"Mateus 3:1-12, Lucas 1", "SIGLAES":"DTN", "CAPES":"10", "NOMES":"A Voz do Deserto"},' +
    '"JUN_5": {"CAPBIBLIA":"Isaías 43 a 45, Mateus 3:13-17", "SIGLAES":"DTN", "CAPES":"11", "NOMES":"O Batismo"},' +
    '"JUN_6": {"CAPBIBLIA":"Isaías 46, Mateus 4", "SIGLAES":"DTN", "CAPES":"12", "NOMES":"A Tentação"},' +
    '"JUN_7": {"CAPBIBLIA":"Isaías 47 a 49, Lucas 4:1-13", "SIGLAES":"DTN", "CAPES":"13", "NOMES":"A Vitória"},' +
    '"JUN_8": {"CAPBIBLIA":"Isaías 50 a 51, João 1", "SIGLAES":"DTN", "CAPES":"14", "NOMES":"Achamos o Messias"},' +
    '"JUN_9": {"CAPBIBLIA":"Isaías 52 a 53, João 2:1-11", "SIGLAES":"DTN", "CAPES":"15", "NOMES":"Nas Bodas"},' +
    '"JUN_10": {"CAPBIBLIA":"Isaías 54 e 55, João 2:12-25", "SIGLAES":"DTN", "CAPES":"16", "NOMES":"Em Seu Templo"},' +
    '"JUN_11": {"CAPBIBLIA":"Isaías 60 a 62, João 3:1-21", "SIGLAES":"DTN", "CAPES":"17", "NOMES":"Nicodemos"},' +
    '"JUN_12": {"CAPBIBLIA":"Jeremias 4 a 6, João 3:22-36", "SIGLAES":"DTN", "CAPES":"18", "NOMES":"É Necessário que Ele Cresça"},' +
    '"JUN_13": {"CAPBIBLIA":"Jeremias 7 a 8, João 4:1-42", "SIGLAES":"DTN", "CAPES":"19", "NOMES":"Junto ao poço de Jacó"},' +
    '"JUN_14": {"CAPBIBLIA":"Jeremias 9 a 11, João 4:43-54", "SIGLAES":"DTN", "CAPES":"20", "NOMES":"Se não virdes Sinais e Milagres"},' +
    '"JUN_15": {"CAPBIBLIA":"Jeremias 12 e 13, João 5", "SIGLAES":"DTN", "CAPES":"21", "NOMES":"Betesda e o Sinédrio"},' +
    '"JUN_16": {"CAPBIBLIA":"Jeremias 14 e 15, Marcos 5 e 6:1-29", "SIGLAES":"DTN", "CAPES":"22", "NOMES":"Prisão e Morte de João Batista"},' +
    '"JUN_17": {"CAPBIBLIA":"Mateus 15 a 17", "SIGLAES":"DTN", "CAPES":"23", "NOMES":"O reino dos Céus está Próximo"},' +
    '"JUN_18": {"CAPBIBLIA":"Lucas 3 e 4:14-44", "SIGLAES":"DTN", "CAPES":"24", "NOMES":"Não é este o Filho do Carpinteiro?"},' +
    '"JUN_19": {"CAPBIBLIA":"Jeremias 16 a 18, Lucas 5:1-11", "SIGLAES":"DTN", "CAPES":"25", "NOMES":"O Chamado a Beira do Mar"},' +
    '"JUN_20": {"CAPBIBLIA":"Jeremias 19 a 21", "SIGLAES":"DTN", "CAPES":"26", "NOMES":"Em Cafarnaum"},' +
    '"JUN_21": {"CAPBIBLIA":"Jeremias 22 a 24, Lucas 5:12-26", "SIGLAES":"DTN", "CAPES":"27", "NOMES":"Podes tornar-me limpo"},' +
    '"JUN_22": {"CAPBIBLIA":"Jeremias 25 a 26, Lucas 5:27-39", "SIGLAES":"DTN", "CAPES":"28", "NOMES":"Levi Mateus"},' +
    '"JUN_23": {"CAPBIBLIA":"Isaías 57 a 59, Mateus 12:1-14, Lucas 6:1-11", "SIGLAES":"DTN", "CAPES":"29", "NOMES":"O Sábado"},' +
    '"JUN_24": {"CAPBIBLIA":"Jeremias 27 e 28, Lucas 6:12-49", "SIGLAES":"DTN", "CAPES":"30", "NOMES":"Nomeou Doze"},' +
    '"JUN_25": {"CAPBIBLIA":"Mateus 5 a 7", "SIGLAES":"DTN", "CAPES":"31", "NOMES":"O Sermão da Montanha"},' +
    '"JUN_26": {"CAPBIBLIA":"Mateus 8 e 9, Lucas 7", "SIGLAES":"DTN", "CAPES":"32", "NOMES":"O Centurião"},' +
    '"JUN_27": {"CAPBIBLIA":"Mateus 10 e 14, Mateus 12:15-50", "SIGLAES":"DTN", "CAPES":"33", "NOMES":"Quem são os Meus Irmãos?"},' +
    '"JUN_28": {"CAPBIBLIA":"Jeremias 33 e 34, Mateus 11", "SIGLAES":"DTN", "CAPES":"34", "NOMES":"O Convite"},' +
    '"JUN_29": {"CAPBIBLIA":"Jeremias 35, Lucas 8:1-39", "SIGLAES":"DTN", "CAPES":"35", "NOMES":"Cala-te, Aquieta-te"},' +
    '"JUN_30": {"CAPBIBLIA":"Jeremias 39 a 41, Lucas 8:40-56", "SIGLAES":"DTN", "CAPES":"36", "NOMES":"O Toque da Fé"},' +
    '"JUL_1": {"CAPBIBLIA":"Jeremias 42 e 43, Lucas 9:1-27", "SIGLAES":"DTN", "CAPES":"37", "NOMES":"Os Primeiros Evangelistas"},' +
    '"JUL_2": {"CAPBIBLIA":"Jeremias 44 e 45, Marcos 6:30-56", "SIGLAES":"DTN", "CAPES":"38", "NOMES":"Vinde...Repousai um Pouco"},' +
    '"JUL_3": {"CAPBIBLIA":"Jeremias 46 a 47, João 6:1-15", "SIGLAES":"DTN", "CAPES":"39", "NOMES":"Dai-lhe Vós de Comer"},' +
    '"JUL_4": {"CAPBIBLIA":"Jeremias 48 a 50, João 6:16-21", "SIGLAES":"DTN", "CAPES":"40", "NOMES":"Uma Noite no Lago"},' +
    '"JUL_5": {"CAPBIBLIA":"Jeremias 51 e 52, João 6:22-71", "SIGLAES":"DTN", "CAPES":"41", "NOMES":"A Crise na Galiléia"},' +
    '"JUL_6": {"CAPBIBLIA":"Lamentações 1 e 2, Marcos 7:1-23", "SIGLAES":"DTN", "CAPES":"42", "NOMES":"Tradição"},' +
    '"JUL_7": {"CAPBIBLIA":"Lamentações 3 a 5, Marcos 7:24-37", "SIGLAES":"DTN", "CAPES":"43", "NOMES":"Barreiras Derrubadas"},' +
    '"JUL_8": {"CAPBIBLIA":"Ezequiel 1 a 3, Marcos 8:1-21", "SIGLAES":"DTN", "CAPES":"44", "NOMES":"O Verdadeiro Sinal"},' +
    '"JUL_9": {"CAPBIBLIA":"Ezequiel 4 a 6, Marcos 8:22-38", "SIGLAES":"DTN", "CAPES":"45", "NOMES":"A Previsão da Cruz"},' +
    '"JUL_10": {"CAPBIBLIA":"Ezequiel 7 a 9, Lucas 9:28-26, Marcos 9:1-13, Mateus 17:1-8", "SIGLAES":"DTN", "CAPES":"46", "NOMES":"A Transfiguração"},' +
    '"JUL_11": {"CAPBIBLIA":"Ezequiel 10 e 11, Lucas 9:37-45, Mateus 17:14-20, Marcos 9:14-29", "SIGLAES":"DTN", "CAPES":"47", "NOMES":"Nada Vos Será Impossível"},' +
    '"JUL_12": {"CAPBIBLIA":"Ezequiel 12 a 14, Marcos 9:30-50, Lucas 9:46-48", "SIGLAES":"DTN", "CAPES":"48", "NOMES":"Quem é o Maior"},' +
    '"JUL_13": {"CAPBIBLIA":"Ezequiel 15 a 16, João 7:1-15 e 7:37 a 39", "SIGLAES":"DTN", "CAPES":"49", "NOMES":"A Festa dos Tabernáculos"},' +
    '"JUL_14": {"CAPBIBLIA":"Ezequiel 17, João 7:16-53", "SIGLAES":"DTN", "CAPES":"50", "NOMES":"Por Entre Laços"},' +
    '"JUL_15": {"CAPBIBLIA":"Ezequiel 19 e 20, João 8 e 9:1-41", "SIGLAES":"DTN", "CAPES":"51", "NOMES":"A Luz da Vida"},' +
    '"JUL_16": {"CAPBIBLIA":"Ezequiel 21 e 22, João 10, Salmos 23", "SIGLAES":"DTN", "CAPES":"52", "NOMES":"O divino Pastor"},' +
    '"JUL_17": {"CAPBIBLIA":"Ezequiel 23 a 25, Lucas 9:46-62", "SIGLAES":"DTN", "CAPES":"53", "NOMES":"A Última jornada da Galiléia"},' +
    '"JUL_18": {"CAPBIBLIA":"Ezequiel 26 e 27, Lucas 10", "SIGLAES":"DTN", "CAPES":"54", "NOMES":"O Bom Samaritano"},' +
    '"JUL_19": {"CAPBIBLIA":"Ezequiel 28 e 29, Lucas 17", "SIGLAES":"DTN", "CAPES":"55", "NOMES":"Não com Aparência Exterior"},' +
    '"JUL_20": {"CAPBIBLIA":"Ezequiel 30 e 31, Mateus 19:1-15", "SIGLAES":"DTN", "CAPES":"56", "NOMES":"Deixai vir a mim os pequeninos "},' +
    '"JUL_21": {"CAPBIBLIA":"Ezequiel 32 a 34, Mateus 19:16-30, Lucas 18:18-23", "SIGLAES":"DTN", "CAPES":"57", "NOMES":"Uma coisa te falta"},' +
    '"JUL_22": {"CAPBIBLIA":"Ezequiel 35 e 36, João 11:1-46", "SIGLAES":"DTN", "CAPES":"58", "NOMES":"Lázaro sai para fora"},' +
    '"JUL_23": {"CAPBIBLIA":"Ezequiel 37 a 39, João 11:47-57", "SIGLAES":"DTN", "CAPES":"59", "NOMES":"Os Sacerdotes tramam"},' +
    '"JUL_24": {"CAPBIBLIA":"Ezequiel 40 a 42, Lucas 18:24-34", "SIGLAES":"DTN", "CAPES":"60", "NOMES":"A Lei do Novo Reino"},' +
    '"JUL_25": {"CAPBIBLIA":"Lucas 19:1-10, Lucas 20, Lucas 21", "SIGLAES":"DTN", "CAPES":"61", "NOMES":"Zaqueu"},' +
    '"JUL_26": {"CAPBIBLIA":"Ezequiel 43 a 45, João 12:1-11", "SIGLAES":"DTN", "CAPES":"62", "NOMES":"Um Banquete na Casa de Simão"},' +
    '"JUL_27": {"CAPBIBLIA":"Ezequiel 46 a 48, Lucas 19:28-40, João 12:12-19", "SIGLAES":"DTN", "CAPES":"63", "NOMES":"Eis que Teu Rei Virá"},' +
    '"JUL_28": {"CAPBIBLIA":"Joel 1 a 3", "SIGLAES":"DTN", "CAPES":"64", "NOMES":"Um Povo Condenado"},' +
    '"JUL_29": {"CAPBIBLIA":"Lucas 19:45-48, Marcos 10, Marcos 11 e 12:1-12", "SIGLAES":"DTN", "CAPES":"65", "NOMES":"O Templo Novamente Purificado"},' +
    '"JUL_30": {"CAPBIBLIA":"Amós 1 e 2, Marcos 12:13-44", "SIGLAES":"DTN", "CAPES":"66", "NOMES":"Conflito"},' +
    '"JUL_31": {"CAPBIBLIA":"Amós 3 e 4, Mateus 23, Marcos 12, Lucas 20:45-47", "SIGLAES":"DTN", "CAPES":"67", "NOMES":"Ais Sobre os Fariseus"},' +
    '"AGO_1": {"CAPBIBLIA":"Amós 5 a 7, João 12:20-50", "SIGLAES":"DTN", "CAPES":"68", "NOMES":"No Pátio"},' +
    '"AGO_2": {"CAPBIBLIA":"Amós 8 e 9, Mateus 24, Marcos 13", "SIGLAES":"DTN", "CAPES":"69", "NOMES":"O Monte das Oliveiras"},' +
    '"AGO_3": {"CAPBIBLIA":"Miquéias 1 a 3, Mateus 25:31-36", "SIGLAES":"DTN", "CAPES":"70", "NOMES":"Um destes Meus Pequeninos Irmãos"},' +
    '"AGO_4": {"CAPBIBLIA":"Miquéias 4 e 5, João 13:1-20", "SIGLAES":"DTN", "CAPES":"71", "NOMES":"Servo dos Servos"},' +
    '"AGO_5": {"CAPBIBLIA":"Marcos 14 a 16, Marcos 14:22-26", "SIGLAES":"DTN", "CAPES":"72", "NOMES":"Em memória da mim"},' +
    '"AGO_6": {"CAPBIBLIA":"João 14 a 17, João 13:31-38", "SIGLAES":"DTN", "CAPES":"73", "NOMES":"Não se Turbe o Vosso Coração"},' +
    '"AGO_7": {"CAPBIBLIA":"Miquéias 6 e 7, João 18:1-12", "SIGLAES":"DTN", "CAPES":"74", "NOMES":"Getsêmani"},' +
    '"AGO_8": {"CAPBIBLIA":"Habacuque 1 a 3, João 18:13-27", "SIGLAES":"DTN", "CAPES":"75", "NOMES":"Caifás"},' +
    '"AGO_9": {"CAPBIBLIA":"Obadias 1, João 13:21-30", "SIGLAES":"DTN", "CAPES":"76", "NOMES":"Judas"},' +
    '"AGO_10": {"CAPBIBLIA":"Jó 1 a 3, João 18:28-40", "SIGLAES":"DTN", "CAPES":"77", "NOMES":"Na Sala de Julgamento de Pilatos"},' +
    '"AGO_11": {"CAPBIBLIA":"Jó 4 e 5, Salmos 22, João 19:1-27", "SIGLAES":"DTN", "CAPES":"78", "NOMES":"O Calvário"},' +
    '"AGO_12": {"CAPBIBLIA":"Jó 6 a 8, João 19:28-37", "SIGLAES":"DTN", "CAPES":"79", "NOMES":"Está Consumado"},' +
    '"AGO_13": {"CAPBIBLIA":"Mateus 20, João 19:28-42", "SIGLAES":"DTN", "CAPES":"80", "NOMES":"No Sepulcro de José"},' +
    '"AGO_14": {"CAPBIBLIA":"Mateus 26 e 27, e 28:1-15", "SIGLAES":"DTN", "CAPES":"81", "NOMES":"O Senhor Ressucitou"},' +
    '"AGO_15": {"CAPBIBLIA":"Jó 9 e 10, João 20:1-18", "SIGLAES":"DTN", "CAPES":"82", "NOMES":"Porque choras?"},' +
    '"AGO_16": {"CAPBIBLIA":"Lucas 22 a 24", "SIGLAES":"DTN", "CAPES":"83", "NOMES":"A Viagem para Emaús"},' +
    '"AGO_17": {"CAPBIBLIA":"Jó 11 a 13, João 20:19-31", "SIGLAES":"DTN", "CAPES":"84", "NOMES":"Paz seja Convosco"},' +
    '"AGO_18": {"CAPBIBLIA":"Jó 14 e 15, João 21", "SIGLAES":"DTN", "CAPES":"85", "NOMES":"Mais uma vez à Beira Mar"},' +
    '"AGO_19": {"CAPBIBLIA":"Jó 16 a 18, Mateus 28:16-20", "SIGLAES":"DTN", "CAPES":"86", "NOMES":"Ide Ensinai a Todas as Nações"},' +
    '"AGO_20": {"CAPBIBLIA":"Jó 19 a 24", "SIGLAES":"PJ", "CAPES":"****", "NOMES":"Prefacio"},' +
    '"AGO_21": {"CAPBIBLIA":"Jó 25 a 27, Mateus 13:34 e 35", "SIGLAES":"PJ", "CAPES":"01", "NOMES":"Ensinando por Parábolas"},' +
    '"AGO_22": {"CAPBIBLIA":"Jó 28 e 29, Mateus 13:1-23", "SIGLAES":"PJ", "CAPES":"02", "NOMES":"O Semeador saiu a Semear"},' +
    '"AGO_23": {"CAPBIBLIA":"Jó 30 e 31, Marcos 4", "SIGLAES":"PJ", "CAPES":"03", "NOMES":"Primeiro a Erva depois a Espiga"},' +
    '"AGO_24": {"CAPBIBLIA":"Jó 32 e 33, Mateus 13:24-43", "SIGLAES":"PJ", "CAPES":"04", "NOMES":"O Joio"},' +
    '"AGO_25": {"CAPBIBLIA":"Jó 34 e 36, Mateus 13:31-32", "SIGLAES":"PJ", "CAPES":"05", "NOMES":"Semelhante a um Grão de Mostarda"},' +
    '"AGO_26": {"CAPBIBLIA":"Jó 37 a 39", "SIGLAES":"PJ", "CAPES":"06", "NOMES":"Outras Lições tiradas da Semeadura"},' +
    '"AGO_27": {"CAPBIBLIA":"Jó 40 a 42, Mateus 13:33", "SIGLAES":"PJ", "CAPES":"07", "NOMES":"Semelhante ao Fermento"},' +
    '"AGO_28": {"CAPBIBLIA":"Sofonias 1 a 3, Mateus 13:44", "SIGLAES":"PJ", "CAPES":"08", "NOMES":"O Tesouro Escondido"},' +
    '"AGO_29": {"CAPBIBLIA":"Salmos 25 e 26, Mateus 13:45-46", "SIGLAES":"PJ", "CAPES":"09", "NOMES":"A Pérola"},' +
    '"AGO_30": {"CAPBIBLIA":"Salmos 27 e 28, Mateus 13:47-58", "SIGLAES":"PJ", "CAPES":"10", "NOMES":"A Rede"},' +
    '"AGO_31": {"CAPBIBLIA":"Salmos 29 e 30, Mateus 13:51 e 52", "SIGLAES":"PJ", "CAPES":"11", "NOMES":"Coisas Novas e Velhas"},' +
    '"SET_1": {"CAPBIBLIA":"Salmos 31 e Lucas 11", "SIGLAES":"PJ", "CAPES":"12", "NOMES":"Pedindo para Dar"},' +
    '"SET_2": {"CAPBIBLIA":"Salmos 33 e 35, Lucas 18:9-14", "SIGLAES":"PJ", "CAPES":"13", "NOMES":"Dois Adoradores"},' +
    '"SET_3": {"CAPBIBLIA":"Salmos 36 a 38, Luvas 18:1-8", "SIGLAES":"PJ", "CAPES":"14", "NOMES":"Não fará Deus Justiça aos Seus Escolhidos?"},' +
    '"SET_4": {"CAPBIBLIA":"Salmos 39 a 41, Lucas 15:1-10", "SIGLAES":"PJ", "CAPES":"15", "NOMES":"Este recebe Pecadores"},' +
    '"SET_5": {"CAPBIBLIA":"Salmos 42 a 44, Lucas 15:11-32", "SIGLAES":"PJ", "CAPES":"16", "NOMES":"Tinha-se Perdido e Achou-se"},' +
    '"SET_6": {"CAPBIBLIA":"Salmos 45 a 47, Lucas 13", "SIGLAES":"PJ", "CAPES":"17", "NOMES":"Deixa-a Este Ano"},' +
    '"SET_7": {"CAPBIBLIA":"Salmos 48 a 50, Lucas 14", "SIGLAES":"PJ", "CAPES":"18", "NOMES":"Sai pelos Caminhos e Valados"},' +
    '"SET_8": {"CAPBIBLIA":"Salmos 52 e 53, Mateus 18", "SIGLAES":"PJ", "CAPES":"19", "NOMES":"A Medida do Perdão"},' +
    '"SET_9": {"CAPBIBLIA":"Salmos 54 a 55, Lucas 12", "SIGLAES":"PJ", "CAPES":"20", "NOMES":"O Lucro que é Perda"},' +
    '"SET_10": {"CAPBIBLIA":"Salmos 56, Lucas 16:19-31", "SIGLAES":"PJ", "CAPES":"21", "NOMES":"Está Posto um Grande Abismo"},' +
    '"SET_11": {"CAPBIBLIA":"Salmos 58 e 59, Mateus 21:1-32", "SIGLAES":"PJ", "CAPES":"22", "NOMES":"Dizendo e Executando"},' +
    '"SET_12": {"CAPBIBLIA":"Salmos 60 a 62, Mateus 21:33-46", "SIGLAES":"PJ", "CAPES":"23", "NOMES":"A Vinha do Senhor"},' +
    '"SET_13": {"CAPBIBLIA":"Salmos 63 a 65, Mateus 22", "SIGLAES":"PJ", "CAPES":"24", "NOMES":"Sem Veste Nupcial"},' +
    '"SET_14": {"CAPBIBLIA":"Salmos 66 a 68, Mateus 25:14-30, Lucas 19:11-27", "SIGLAES":"PJ", "CAPES":"25", "NOMES":"Talentos"},' +
    '"SET_15": {"CAPBIBLIA":"Salmos 69 a 71, Lucas 16:1-18", "SIGLAES":"PJ", "CAPES":"26", "NOMES":"Amigos e As Riquezas da Injustiça"},' +
    '"SET_16": {"CAPBIBLIA":"Salmos 72 a 74, Lucas 10:23-37", "SIGLAES":"PJ", "CAPES":"27", "NOMES":"Quem é o meu Próximo"},' +
    '"SET_17": {"CAPBIBLIA":"Salmos 75 a 77, Lucas 18:15-43", "SIGLAES":"PJ", "CAPES":"28", "NOMES":"O Galardão da Graça"},' +
    '"SET_18": {"CAPBIBLIA":"Salmos 78 a 80, Mateus 25:1-3", "SIGLAES":"PJ", "CAPES":"29", "NOMES":"O Encontro do Esposo"},' +
    '"SET_19": {"CAPBIBLIA":"Salmos 81 a 83", "SIGLAES":"AA", "CAPES":"****", "NOMES":"Prefacio"},' +
    '"SET_20": {"CAPBIBLIA":"Salmos 84 a 86, Mateus 28:18-20", "SIGLAES":"AA", "CAPES":"01", "NOMES":"O Propósito de Deus para Sua Igreja"},' +
    '"SET_21": {"CAPBIBLIA":"Salmos 87 e 88, Atos 1", "SIGLAES":"AA", "CAPES":"02", "NOMES":"O Preparo dos Doze"},' +
    '"SET_22": {"CAPBIBLIA":"Salmos 89 e 90, Atos 1:8", "SIGLAES":"AA", "CAPES":"03", "NOMES":"A Grande Missão"},' +
    '"SET_23": {"CAPBIBLIA":"Salmos 92 e 93, Atos 2:1-13", "SIGLAES":"AA", "CAPES":"04", "NOMES":"O Pentecostes"},' +
    '"SET_24": {"CAPBIBLIA":"Salmos 94 a 96, Mateus 3:11, Atos 2:14-47", "SIGLAES":"AA", "CAPES":"05", "NOMES":"O Dom do Espírito"},' +
    '"SET_25": {"CAPBIBLIA":"Salmos 97, Atos 3 e 4", "SIGLAES":"AA", "CAPES":"06", "NOMES":"A Porta do Tenplo"},' +
    '"SET_26": {"CAPBIBLIA":"Salmos 98 a 100, Atos 5:1-11", "SIGLAES":"AA", "CAPES":"07", "NOMES":"Uma Advertência a Hipocrisia"},' +
    '"SET_27": {"CAPBIBLIA":"Salmos 101 e 102, Atos 5:12-42", "SIGLAES":"AA", "CAPES":"08", "NOMES":"Perante o Sinédrio"},' +
    '"SET_28": {"CAPBIBLIA":"Salmos 103 e 104 e Atos 6", "SIGLAES":"AA", "CAPES":"09", "NOMES":"Os Sete Diáconos"},' +
    '"SET_29": {"CAPBIBLIA":"Salmos 105 e 106 e Atos 7, ", "SIGLAES":"AA", "CAPES":"10", "NOMES":"O Primeiro Mártir Cristão"},' +
    '"SET_30": {"CAPBIBLIA":"Salmos 107 e 108 e Atos 8", "SIGLAES":"AA", "CAPES":"11", "NOMES":"O Evangelho em Samaria"},' +
    '"OUT_1": {"CAPBIBLIA":"Salmos 109 e 110, Atos 9:1-18", "SIGLAES":"AA", "CAPES":"12", "NOMES":"De perseguidor a Discípulo"},' +
    '"OUT_2": {"CAPBIBLIA":"Salmos 111 a 113, Atos 9:19-30", "SIGLAES":"AA", "CAPES":"13", "NOMES":"Dias de Preparo"},' +
    '"OUT_3": {"CAPBIBLIA":"Salmos 114 e 115, Atos 9 a 11", "SIGLAES":"AA", "CAPES":"14", "NOMES":"Um Inquiridor da Verdade"},' +
    '"OUT_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"15", "NOMES":"Libertado da Prisão"},' +
    '"OUT_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"16", "NOMES":"A Mensagem do Evangelho em Antioquia"},' +
    '"OUT_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"17", "NOMES":"Arautos do Evngelho"},' +
    '"OUT_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"18", "NOMES":"Pregando entre Gentios"},' +
    '"OUT_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"19", "NOMES":"Judeus e Gentios"},' +
    '"OUT_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"20", "NOMES":"Exaltando a Cruz"},' +
    '"OUT_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"21", "NOMES":"Nas Regiões Distantes"},' +
    '"OUT_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"22", "NOMES":"Tessalônica"},' +
    '"OUT_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"23", "NOMES":"Beréia e Atenas"},' +
    '"OUT_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"24", "NOMES":"Corinto"},' +
    '"OUT_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"25", "NOMES":"As Cartas aos Tessalonicenses"},' +
    '"OUT_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"26", "NOMES":"Apoio em Corinto"},' +
    '"OUT_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"27", "NOMES":"Éfeso"},' +
    '"OUT_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"28", "NOMES":"Dias de Luta e de Prova"},' +
    '"OUT_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"29", "NOMES":"Mensagem de AAdvertência"},' +
    '"OUT_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"30", "NOMES":"Chamado a Mais Elevada Ordem"},' +
    '"OUT_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"31", "NOMES":"A Mensagem Atendida"},' +
    '"OUT_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"32", "NOMES":"Uma Igreja Liberal"},' +
    '"OUT_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"33", "NOMES":"Trabalho sobre Dificuldades"},' +
    '"OUT_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"34", "NOMES":"Ministério Consagrado"},' +
    '"OUT_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"35", "NOMES":"Salvação para os Judeus"},' +
    '"OUT_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"36", "NOMES":"Apostasia na Galácia"},' +
    '"OUT_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"37", "NOMES":"A Última Viagem de Paulo"},' +
    '"OUT_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"38", "NOMES":"Paulo Prisioneiro"},' +
    '"OUT_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"39", "NOMES":"Perante o Tribunal de Cesaréia"},' +
    '"OUT_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"40", "NOMES":"Paulo Apela para César"},' +
    '"OUT_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"41", "NOMES":"Quase Persuadido"},' +
    '"OUT_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"42", "NOMES":"A Viagem e o Naufrágio"},' +
    '"NOV_1": {"CAPBIBLIA":"Filemon 1, Atos 28", "SIGLAES":"AA", "CAPES":"43", "NOMES":"Em Roma"},' +
    '"NOV_2": {"CAPBIBLIA":"Tito 1 a 3", "SIGLAES":"AA", "CAPES":"44", "NOMES":"Os da Casa de César"},' +
    '"NOV_3": {"CAPBIBLIA":"Filipenses 1 a 4", "SIGLAES":"AA", "CAPES":"45", "NOMES":"Carta de Roma"},' +
    '"NOV_4": {"CAPBIBLIA":"Colossenses 1 a 4", "SIGLAES":"AA", "CAPES":"46", "NOMES":"Em Liberdade"},' +
    '"NOV_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"47", "NOMES":"A Última Prisão"},' +
    '"NOV_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"48", "NOMES":"Paulo perante Nero"},' +
    '"NOV_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"49", "NOMES":"Última Carta de Paulo"},' +
    '"NOV_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"50", "NOMES":"Condenado a Morte"},' +
    '"NOV_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"51", "NOMES":"Um Fiel Subpastor"},' +
    '"NOV_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"52", "NOMES":"Firme até o Fim"},' +
    '"NOV_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"53", "NOMES":"João, o Discípulo Amado"},' +
    '"NOV_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"54", "NOMES":"Uma Fiel Testemunha"},' +
    '"NOV_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"AA", "CAPES":"55", "NOMES":"Transformação pela Graça"},' +
    '"NOV_14": {"CAPBIBLIA":"Salmos 131 a 136, Apocalipse 1", "SIGLAES":"AA", "CAPES":"56", "NOMES":"Patmos"},' +
    '"NOV_15": {"CAPBIBLIA":"Salmos 137 a 140, Apocalipse 2", "SIGLAES":"AA", "CAPES":"57", "NOMES":"O Apocalipse"},' +
    '"NOV_16": {"CAPBIBLIA":"Salmos 141 a 143, Apocalipse 3", "SIGLAES":"AA", "CAPES":"58", "NOMES":"A Igreja Triunfante"},' +
    '"NOV_17": {"CAPBIBLIA":"Salmos 146 a 150", "SIGLAES":"GC", "CAPES":"**", "NOMES":"Introdução"},' +
    '"NOV_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"01", "NOMES":"Predito o Destino do Mundo"},' +
    '"NOV_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"02", "NOMES":"O Valor dos Mártires"},' +
    '"NOV_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"03", "NOMES":"Como começaram as Trevas"},' +
    '"NOV_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"04", "NOMES":"Um Poder que Difunde Luz"},' +
    '"NOV_22": {"CAPBIBLIA":"Provérbios 4 a 6", "SIGLAES":"GC", "CAPES":"05", "NOMES":"Arautos de uma Era Melhor"},' +
    '"NOV_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"06", "NOMES":"Dois Heróis da Idade Média"},' +
    '"NOV_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"07", "NOMES":"A Influência de um Bom Lar"},' +
    '"NOV_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"08", "NOMES":"O Poder Triunfante da Verdade"},' +
    '"NOV_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"09", "NOMES":"Luz na Suíça"},' +
    '"NOV_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"10", "NOMES":"A Europa Desperta"},' +
    '"NOV_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"11", "NOMES":"Os Príncipes Amparam a Verdade"},' +
    '"NOV_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"12", "NOMES":"Os Nobres da França"},' +
    '"NOV_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"13", "NOMES":"Liberdade nos Países Baixos"},' +
    '"DEZ_1": {"CAPBIBLIA":"Eclesiastes 7 e 8", "SIGLAES":"GC", "CAPES":"14", "NOMES":"Progressos na Inglaterra"},' +
    '"DEZ_2": {"CAPBIBLIA":"Eclesiastes 10 e 11, Apocalipse 11", "SIGLAES":"GC", "CAPES":"15", "NOMES":"A Escritura Sagrada e a Revolução Francesa"},' +
    '"DEZ_3": {"CAPBIBLIA":"Cantares 1 a 3", "SIGLAES":"GC", "CAPES":"16", "NOMES":"O Mais Sagrado Direito do Homem"},' +
    '"DEZ_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"17", "NOMES":"A Esperança que Infunde a Alegria"},' +
    '"DEZ_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"18", "NOMES":"Uma Profecia muito Significativa"},' +
    '"DEZ_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"19", "NOMES":"Luz para os Nossos Dias"},' +
    '"DEZ_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"20", "NOMES":"Um Grande Movimento Mundial"},' +
    '"DEZ_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"21", "NOMES":"A Causa da Degradação Atual"},' +
    '"DEZ_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"GC", "CAPES":"22", "NOMES":"Profecias Alentadoras"},' +
    '"DEZ_10": {"CAPBIBLIA":"Daniel 9:25-27, Levítico 16:14, Hebreus 8 e 9, Daniel 8", "SIGLAES":"GC", "CAPES":"23", "NOMES":"O Santuário Celestial"},' +
    '"DEZ_11": {"CAPBIBLIA":"Daniel 8:14, Daniel 9, Eclesiastes 11:9-10, Eclesiastes 12", "SIGLAES":"GC", "CAPES":"24", "NOMES":"Quando começa o Julgamento Divino"},' +
    '"DEZ_12": {"CAPBIBLIA":"Hebreus 6 e 7, Êxodo 20", "SIGLAES":"GC", "CAPES":"25", "NOMES":"A Imutável Lei de Deus"},' +
    '"DEZ_13": {"CAPBIBLIA":"Hebreus 10 e 11, Isaías 56", "SIGLAES":"GC", "CAPES":"26", "NOMES":"Restauração da Verdade"},' +
    '"DEZ_14": {"CAPBIBLIA":"Hebreus 12 e 13", "SIGLAES":"GC", "CAPES":"27", "NOMES":"A Vida que Satisfaz"},' +
    '"DEZ_15": {"CAPBIBLIA":"Tiago 1 a 3, Daniel 7", "SIGLAES":"GC", "CAPES":"28", "NOMES":"O Grande Juízo"},' +
    '"DEZ_16": {"CAPBIBLIA":"Tiago 4 e 5", "SIGLAES":"GC", "CAPES":"29", "NOMES":"A Origem do Mal e da Dor"},' +
    '"DEZ_17": {"CAPBIBLIA":"1 Crônicas 18 a 20", "SIGLAES":"GC", "CAPES":"30", "NOMES":"O Pior Inimigo do Homem"},' +
    '"DEZ_18": {"CAPBIBLIA":"1 Crônicas 21 a 23", "SIGLAES":"GC", "CAPES":"31", "NOMES":"Os Invisíveis Defensores dos Homens"},' +
    '"DEZ_19": {"CAPBIBLIA":"1 Crônicas 24 e 25, Apocalipse 12", "SIGLAES":"GC", "CAPES":"32", "NOMES":"Os Ardis de Satanás"},' +
    '"DEZ_20": {"CAPBIBLIA":"Ezequiel 18:18, Eclesiastes 9:8", "SIGLAES":"GC", "CAPES":"33", "NOMES":"É o Homem Importal?"},' +
    '"DEZ_21": {"CAPBIBLIA":"1 Crônicas 26 e 27, Êxodo 22, Apocalipse 21", "SIGLAES":"GC", "CAPES":"34", "NOMES":"Oferece o Espiritismo alguma Esperança?"},' +
    '"DEZ_22": {"CAPBIBLIA":"Apocalipse 13 e 14", "SIGLAES":"GC", "CAPES":"35", "NOMES":"Ameaça a Consciência"},' +
    '"DEZ_23": {"CAPBIBLIA":"1 Crônicas 28 e 29", "SIGLAES":"GC", "CAPES":"36", "NOMES":"O Maior Perigo para o Lar"},' +
    '"DEZ_24": {"CAPBIBLIA":"Provérbios 26 a 28", "SIGLAES":"GC", "CAPES":"37", "NOMES":"Nossa Única Salvaguarda"},' +
    '"DEZ_25": {"CAPBIBLIA":"Provérbios 29, Apocalipse 17 e 18", "SIGLAES":"GC", "CAPES":"38", "NOMES":"O Último Convite Divino"},' +
    '"DEZ_26": {"CAPBIBLIA":"Salmos 91, Apocalipse 15 e 16, Daniel 10 a 12", "SIGLAES":"GC", "CAPES":"39", "NOMES":"Aproxima-se o Tempo de Angústia"},' +
    '"DEZ_27": {"CAPBIBLIA":"Apocalipse 6 e 19", "SIGLAES":"GC", "CAPES":"40", "NOMES":"O Livramento dos Justos"},' +
    '"DEZ_28": {"CAPBIBLIA":"Provérbios 30 e 31, Apocalipse 20", "SIGLAES":"GC", "CAPES":"41", "NOMES":"Será desolada a Terra"},' +
    '"DEZ_29": {"CAPBIBLIA":"Salmos 46, Apocalipse 21 e 22", "SIGLAES":"GC", "CAPES":"42", "NOMES":"O Final e Glorioso Triunfo"},' +
    '"DEZ_30": {"CAPBIBLIA":"Revisão Geral do Velho Testamento", "SIGLAES":"**", "CAPES":"**", "NOMES":"****"},' +
    '"DEZ_31": {"CAPBIBLIA":"Revisão Geral do Novo Testamento", "SIGLAES":"**", "CAPES":"**", "NOMES":"****"}' +
'}';

 function getCapitulosBibliaPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].CAPBIBLIA;
}
 function getCapitulosESPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].CAPES;
}
 function getTituloCapituloESPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].NOMES;
}
 function getSiglaESPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].SIGLAES;
}
function getNomeLivro(chave) {
    if (chave=="**") return '**';
    let planos = Object.assign({}, JSON.parse(livrosstring));
    return planos[chave];
}
function reiniciar() {
    const storage = window.localStorage;
    storage.clear();
    atualizarMeses();
}
