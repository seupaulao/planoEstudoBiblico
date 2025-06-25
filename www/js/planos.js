const livrosstring = '{"PP": "Patriarcas e Profetas","PR": "Profetas e Reis", "AA": "Atos dos Apóstolos", "DTN": "O Desejado de Todas as Nações", "PJ": "Parábolas de Jesus","GC": "O Grande Conflito"}';

const urllivrospdf = '{"PP": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Patriarcas%20e%20Profetas.pdf","PR": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Profetas%20e%20Reis.pdf", "AA": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Atos%20dos%20Ap%C3%B3stolos.pdf", "DTN": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/O%20Desejado%20de%20Todas%20as%20Na%C3%A7%C3%B5es.pdf", "PJ": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Par%C3%A1bolas%20de%20Jesus.pdf","GC": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/O%20Grande%20Conflito%20%28condensado%29.pdf"}';

const urllivros = '{"PP": "https://ellenwhiteaudio.org/pt/patriarcas-e-profetas/",'+
                    '"PR": "https://ellenwhiteaudio.org/pt/profetas-e-reis/",'+
                    '"AA": "",'+
                    '"DTN": "https://ellenwhiteaudio.org/pt/desejado-de-todas-as-nacoes/",' +
                    '"PJ": "https://ellenwhiteaudio.org/pt/parabolas-de-jesus/",'+
                    '"GC": "https://ellenwhiteaudio.org/pt/grande-conflito/"}';

const urlellenwhite = 'https://ellenwhiteaudio.org/pt/ebooks-egw/';

const livros_biblia_refs=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA",
                          "1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO",
                          "ECC","SOL","ISA","JER","LAM","EZE","DAN","HOS","JOE","AMO",
                          "OBA","JON","MIC","NAH","HAB","ZEP","HAG","ZEC","MAL","MAT",
                          "MAR","LUK","JOH","ACT","ROM","1CO","2CO","GAL","EPH","PHI",
                          "COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAM","1PE",
                          "2PE","1JO","2JO","3JO","JUD","REV"];

const livros_biblia=['GÊNESIS',"ÊXODO","LEVÍTICO","NÚMEROS","DEUTERONÔMIO",
    "JOSUÉ","JUÍZES","RUTE","I SAMUEL","II SAMUEL",
    "I REIS","II REIS","I CRÔNICAS","II CRÔNICAS","ESDRAS",
    "NEEMIAS","ESTER","JÓ","SALMOS","PROVÉRBIOS","ECLESIASTES",
    "CANTARES","ISAÍAS","JEREMIAS","LAMENTAÇÕES","EZEQUIEL","DANIEL",
    "OSÉIAS","JOEL","AMÓS","OBADIAS","JONAS","MIQUÉIAS","NAUM",
    "HABACUQUE","SOFONIAS","AGEU","ZACARIAS","MALAQUIAS","MATEUS",
    "MARCOS","LUCAS","JOÃO","ATOS","ROMANOS","I CORÍNTIOS","II CORÍNTIOS",
    "GÁLATAS","EFÉSIOS","FILIPENSES","COLOSSENSES","I TESSALONICENSES",
    "II TESSALONICENSES","I TIMÓTEO","II TIMÓTEO","TITO","FILEMON",
    "HEBREUS","TIAGO","I PEDRO","II PEDRO","I JOÃO","II JOÃO",
    "III JOÃO","JUDAS","APOCALIPSE"];

const planosstring = '{' +
    '"JAN_1": {"REFS":"PSA_1, PSA_2", "CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"JAN_2": {"REFS":"PSA_3,PSA_4,PSA_5,PSA_6", "CAPBIBLIA":"Salmos 3 a 6", "SIGLAES":"PP", "CAPES":"01", "NOMES":"Porque foi permitido o pecado?"},' +
    '"JAN_3": {"REFS":"PSA_7,PSA_8,GEN_1", "CAPBIBLIA":"Salmos 7 a 8 e Genesis 1", "SIGLAES":"PP", "CAPES":"02", "NOMES":"A Criação"},' +
    '"JAN_4": {"REFS":"PSA_9,PSA_10,GEN_2", "CAPBIBLIA":"Salmos 9 e 10 e Genesis 2", "SIGLAES":"PP", "CAPES":"03", "NOMES":"A Semana Literal"},' +
    '"JAN_5": {"REFS":"PSA_11,PSA_12,GEN_3", "CAPBIBLIA":"Salmos 11 e 12 e Genesis 3", "SIGLAES":"PP", "CAPES":"04", "NOMES":"A Tentação e a Queda"},' +
    '"JAN_6": {"REFS":"PSA_13,PSA_14,PSA_15,PSA_16", "CAPBIBLIA":"Salmos 13 a 16", "SIGLAES":"PP", "CAPES":"05", "NOMES":"O Plano da Redenção"},' +
    '"JAN_7": {"REFS":"PSA_17,GEN_4", "CAPBIBLIA":"Salmos 17 e Genesis 4", "SIGLAES":"PP", "CAPES":"06", "NOMES":"Caim e Abel"},' +
    '"JAN_8": {"REFS":"PSA_19,PSA_20,GEN_5", "CAPBIBLIA":"Salmos 19 a 20 e Genesis 5", "SIGLAES":"PP", "CAPES":"07", "NOMES":"Sete e Enoque"},' +
    '"JAN_9": {"REFS":"PSA_21,GEN_6,GEN_7", "CAPBIBLIA":"Salmos 21 e Genesis 6 e 7", "SIGLAES":"PP", "CAPES":"08", "NOMES":"O Dilúvio"},' +
    '"JAN_10": {"REFS":"GEN_8,GEN_9,GEN_10", "CAPBIBLIA":"Genesis 8 a 10", "SIGLAES":"PP", "CAPES":"09", "NOMES":"Depois do Dilúvio"},' +
    '"JAN_11": {"REFS":"PSA_24,GEN_11", "CAPBIBLIA":"Salmos 24 e Genesis 11", "SIGLAES":"PP", "CAPES":"10", "NOMES":"A Torre de Babel"},' +
    '"JAN_12": {"REFS":"GEN_12,GEN_13,GEN_14,GEN_15", "CAPBIBLIA":"Genesis 12 a 15", "SIGLAES":"PP", "CAPES":"11", "NOMES":"A Vocação de Abraão"},' +
    '"JAN_13": {"REFS":"GEN_16,GEN_17,GEN_18", "CAPBIBLIA":"Genesis 16 a 18", "SIGLAES":"PP", "CAPES":"12", "NOMES":"Abraão em Canaã"},' +
    '"JAN_14": {"REFS":"GEN_20,GEN_21,GEN_22", "CAPBIBLIA":"Genesis 20 a 22", "SIGLAES":"PP", "CAPES":"13", "NOMES":"A Prova de Fé"},' +
    '"JAN_15": {"REFS":"GEN_19", "CAPBIBLIA":"Genesis 19", "SIGLAES":"PP", "CAPES":"14", "NOMES":"A Destruição de Sodoma"},' +
    '"JAN_16": {"REFS":"GEN_23,GEN_24", "CAPBIBLIA":"Genesis 23 a 24", "SIGLAES":"PP", "CAPES":"15", "NOMES":"O Casamento de  Isaque"},' +
    '"JAN_17": {"REFS":"GEN_25,GEN_26,GEN_27", "CAPBIBLIA":"Genesis 25 a 27", "SIGLAES":"PP", "CAPES":"16", "NOMES":"Jacó e Esaú"},' +
    '"JAN_18": {"REFS":"GEN_28,GEN_29,GEN_30,GEN_31", "CAPBIBLIA":"Genesis 28 a 31", "SIGLAES":"PP", "CAPES":"17", "NOMES":"Fuga e Exílio de Jacó"},' +
    '"JAN_19": {"REFS":"GEN_32,GEN_33,GEN_34", "CAPBIBLIA":"Genesis 32 a 34", "SIGLAES":"PP", "CAPES":"18", "NOMES":"A noite de luta"},' +
    '"JAN_20": {"REFS":"GEN_35,GEN_36,GEN_37,GEN_38", "CAPBIBLIA":"Genesis 35 a 38", "SIGLAES":"PP", "CAPES":"19", "NOMES":"A volta para Canaã"},' +
    '"JAN_21": {"REFS":"GEN_39,GEN_40,GEN_41,GEN_42,GEN_43,GEN_44,GEN_45,GEN_46", "CAPBIBLIA":"Genesis 39 a 46", "SIGLAES":"PP", "CAPES":"20", "NOMES":"José no Egito"},' +
    '"JAN_22": {"REFS":"GEN_47,GEN_48,GEN_49,GEN_50", "CAPBIBLIA":"Genesis 47 a 50", "SIGLAES":"PP", "CAPES":"21", "NOMES":"José e seus irmãos"},' +
    '"JAN_23": {"REFS":"EXO_1,EXO_2,EXO_3,EXO_4", "CAPBIBLIA":"Êxodo 1 a 4", "SIGLAES":"PP", "CAPES":"22", "NOMES":"Moisés"},' +
    '"JAN_24": {"REFS":"EXO_5,EXO_6,EXO_7,EXO_8", "CAPBIBLIA":"Êxodo 5 a 8", "SIGLAES":"PP", "CAPES":"23", "NOMES":"As Pragas do Egito"},' +
    '"JAN_25": {"REFS":"EXO_9,EXO_10,EXO_11,EXO_12", "CAPBIBLIA":"Êxodo 9 a 12", "SIGLAES":"PP", "CAPES":"24", "NOMES":"A Páscoa"},' +
    '"JAN_26": {"REFS":"EXO_13,EXO_14,EXO_15", "CAPBIBLIA":"Êxodo 13 a 15", "SIGLAES":"PP", "CAPES":"25", "NOMES":"O Êxodo"},' +
    '"JAN_27": {"REFS":"EXO_16,EXO_17,EXO_18", "CAPBIBLIA":"Êxodo 16 a 18", "SIGLAES":"PP", "CAPES":"26", "NOMES":"Do Mar Vermelho ao Sinai"},' +
    '"JAN_28": {"REFS":"EXO_19,EXO_20,EXO_21,EXO_22", "CAPBIBLIA":"Êxodo 19 a 22", "SIGLAES":"PP", "CAPES":"27", "NOMES":"Israel Recebe a Lei"},' +
    '"JAN_29": {"REFS":"EXO_23,EXO_24,EXO_25,EXO_26,EXO_27,EXO_28", "CAPBIBLIA":"Êxodo 23 a 28", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"JAN_30": {"REFS":"EXO_29,EXO_30,EXO_31,EXO_32", "CAPBIBLIA":"Êxodo 29 a 32", "SIGLAES":"PP", "CAPES":"28", "NOMES":"Idolatria no Sinai"},' +
    '"JAN_31": {"REFS":"EXO_33,EXO_34,EXO_35,EXO_36,EXO_37", "CAPBIBLIA":"Êxodo 33 a 37", "SIGLAES":"PP", "CAPES":"29", "NOMES":"Inimizade de Satanás contra a Lei de Deus"},' +
    '"FEV_1": {"REFS":"EXO_38,EXO_39,EXO_40", "CAPBIBLIA":"Êxodo 38 a 40", "SIGLAES":"PP", "CAPES":"30", "NOMES":"O Tabernáculo e Seus Serviços"},' +
    '"FEV_2": {"REFS":"LEV_1,LEV_2,LEV_3,LEV_4,LEV_5,LEV_6,LEV_7", "CAPBIBLIA":"Levítico 1 a 7", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_3": {"REFS":"LEV_8,LEV_9,LEV_10,LEV_11,", "CAPBIBLIA":"Levítico 8 a 11", "SIGLAES":"PP", "CAPES":"31", "NOMES":"O Pecado de Nadabe e Abiú"},' +
    '"FEV_4": {"REFS":"LEV_12,LEV_13,LEV_14,LEV_15,", "CAPBIBLIA":"Levítico 12 a 15", "SIGLAES":"PP", "CAPES":"32", "NOMES":"A Lei e os Concertos"},' +
    '"FEV_5": {"REFS":"NUM_1,NUM_2,NUM_3,NUM_4", "CAPBIBLIA":"Números 1 a 4", "SIGLAES":"PP", "CAPES":"33", "NOMES":"Do Sinal a Cades"},' +
    '"FEV_6": {"REFS":"NUM_5,NUM_6,NUM_7,NUM_8,NUM_9,NUM_10,NUM_11,NUM_12", "CAPBIBLIA":"Números 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_7": {"REFS":"NUM_13,NUM_14,NUM_15,DEU_1", "CAPBIBLIA":"Números 13 a 14 e Deuteronômio 1", "SIGLAES":"PP", "CAPES":"34", "NOMES":"Os Doze Espias"},' +
    '"FEV_8": {"REFS":"NUM_15,NUM_16,NUM_17", "CAPBIBLIA":"Números 15 a 17", "SIGLAES":"PP", "CAPES":"35", "NOMES":"A Rebelião de Coré"},' +
    '"FEV_9": {"REFS":"NUM_18,NUM_19,DEU_2", "CAPBIBLIA":"Números 18 e 19 e Deuteronômio 2", "SIGLAES":"PP", "CAPES":"36", "NOMES":"No Deserto"},' +
    '"FEV_10": {"REFS":"NUM_20,NUM_29,NUM_30", "CAPBIBLIA":"Números 20, 29 e 30", "SIGLAES":"PP", "CAPES":"37", "NOMES":"A Rocha Ferida"},' +
    '"FEV_11": {"REFS":"NUM_21:1-30, NUM_31, NUM_32, NUM_33", "CAPBIBLIA":"Números 21:01-30, 31 a 33", "SIGLAES":"PP", "CAPES":"38", "NOMES":"A Jornada em redor de Edom"},' +
    '"FEV_12": {"REFS":"NUM_21:31-35,NUM_34,NUM_35,NUM_36", "CAPBIBLIA":"Números 21:31-35, 34 a 36", "SIGLAES":"PP", "CAPES":"39", "NOMES":"A Conquista de Basã"},' +
    '"FEV_13": {"REFS":"NUM_22,NUM_23,NUM_24", "CAPBIBLIA":"Números 22 a 24", "SIGLAES":"PP", "CAPES":"40", "NOMES":"Balaão"},' +
    '"FEV_14": {"REFS":"NUM_25,NUM_26,NUM_27,NUM_28", "CAPBIBLIA":"Números 25 a 28", "SIGLAES":"PP", "CAPES":"41", "NOMES":"Apostasia no Jordão"},' +
    '"FEV_15": {"REFS":"DEU_3,DEU_4,DEU_5", "CAPBIBLIA":"Deuteronômio 3 a 5", "SIGLAES":"PP", "CAPES":"14", "NOMES":"A repetição da Lei"},' +
    '"FEV_16": {"REFS":"DEU_6,DEU_7,DEU_8,DEU_9,DEU_10,DEU_11,DEU_12,DEU_13,", "CAPBIBLIA":"Deuteronômio 6 a 13", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_17": {"REFS":"DEU_14,DEU_15,DEU_16,DEU_17", "CAPBIBLIA":"Deuteronômio 14 a 17", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_18": {"REFS":"DEU_18,DEU_19,DEU_20,DEU_21,DEU_22,DEU_23,DEU_24,DEU_25,DEU_26,DEU_27,DEU_28, DEU_29", "CAPBIBLIA":"Deuteronômio 18 a 29", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_19": {"REFS":"DEU_30,DEU_31,DEU_32,DEU_33,DEU_34", "CAPBIBLIA":"Deuteronômio 30 a 34", "SIGLAES":"PP", "CAPES":"43", "NOMES":"A Morte de Moisés"},' +
    '"FEV_20": {"REFS":"JOS_1,JOS_2,JOS_3,JOS_4", "CAPBIBLIA":"Josué 1 a 4", "SIGLAES":"PP", "CAPES":"44", "NOMES":"A Travessia do Jordão"},' +
    '"FEV_21": {"REFS":"JOS_5,JOS_6,JOS_7", "CAPBIBLIA":"Josué 5 a 7", "SIGLAES":"PP", "CAPES":"45", "NOMES":"A Queda de Jericó"},' +
    '"FEV_22": {"REFS":"JOS_8,JOS_9,JOS_10,JOS_11", "CAPBIBLIA":"Josué 8 a 11", "SIGLAES":"PP", "CAPES":"46", "NOMES":"As bênçãos e as maldições"},' +
    '"FEV_23": {"REFS":"JOS_12,JOS_13,JOS_14,JOS_15,JOS_16,JOS_17", "CAPBIBLIA":"Josué 12 a 17", "SIGLAES":"PP", "CAPES":"47", "NOMES":"Aliança com os Gebeonitas"},' +
    '"FEV_24": {"REFS":"JOS_18,JOS_19,JOS_20,JOS_21", "CAPBIBLIA":"Josué 18 a 21", "SIGLAES":"PP", "CAPES":"48", "NOMES":"A divisão de Canaã"},' +
    '"FEV_25": {"REFS":"JOS_22,JOS_23,JOS_24", "CAPBIBLIA":"Josué 22 a 24", "SIGLAES":"PP", "CAPES":"49", "NOMES":"Prefacio"},' +
    '"FEV_26": {"REFS":"DEU_14:22-29, NUM_18:21-32, LEV_17,LEV_18,LEV_19,LEV_20,LEV_27:30-34", "CAPBIBLIA":"Deut. 14:22-29; Núm. 18:21-32, Lev. 17 a 20; 27:30-34", "SIGLAES":"PP", "CAPES":"50", "NOMES":"O Dízimo"},' +
    '"FEV_27": {"REFS":"LEV_25,LEV_26", "CAPBIBLIA":"Levítico 25 e 26", "SIGLAES":"PP", "CAPES":"51", "NOMES":"O Cuidado de Deus para com os  pobres"},' +
    '"FEV_28": {"REFS":"LEV_21,LEV_22,LEV_23,LEV_24", "CAPBIBLIA":"Levítico 21 a 24", "SIGLAES":"PP", "CAPES":"52", "NOMES":"As Festas Anuais"},' +
    '"MAR_1": {"REFS":"", "CAPBIBLIA":"Juízes 1 a 4", "SIGLAES":"PP", "CAPES":"53", "NOMES":"Os primeiros juízes"},' +
    '"MAR_2": {"REFS":"", "CAPBIBLIA":"Juízes 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_3": {"REFS":"", "CAPBIBLIA":"Juízes 13 a 16", "SIGLAES":"PP", "CAPES":"54", "NOMES":"Sansão"},' +
    '"MAR_4": {"REFS":"", "CAPBIBLIA":"Juízes 17 a 21", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_5": {"REFS":"", "CAPBIBLIA":"Rute 1 e 2 e I Samuel 1", "SIGLAES":"PP", "CAPES":"55", "NOMES":"O Menino Samuel"},' +
    '"MAR_6": {"REFS":"", "CAPBIBLIA":"Rute 3 e 4 e I Samuel 2", "SIGLAES":"PP", "CAPES":"56", "NOMES":"Eli e seus filhos"},' +
    '"MAR_7": {"REFS":"", "CAPBIBLIA":"I Samuel 3 a 6; I Crônicas 13 a 15", "SIGLAES":"PP", "CAPES":"57", "NOMES":"A Arca tomada pelos filisteus"},' +
    '"MAR_8": {"REFS":"", "CAPBIBLIA":"I Reis 4:38-41; II Reis 2:15-18; I Samuel 7 a 9", "SIGLAES":"PP", "CAPES":"58", "NOMES":"A Escola dos Profetas"},' +
    '"MAR_9": {"REFS":"", "CAPBIBLIA":"I Samuel 10 a 12", "SIGLAES":"PP", "CAPES":"59", "NOMES":"O Primeiro Rei de Israel"},' +
    '"MAR_10": {"REFS":"", "CAPBIBLIA":"I Samuel 13 a 14", "SIGLAES":"PP", "CAPES":"60", "NOMES":"A Presunção de Saul"},' +
    '"MAR_11": {"REFS":"", "CAPBIBLIA":"I Samuel 15", "SIGLAES":"PP", "CAPES":"61", "NOMES":"A Rejeição de Saul"},' +
    '"MAR_12": {"REFS":"", "CAPBIBLIA":"I Samuel 16", "SIGLAES":"PP", "CAPES":"62", "NOMES":"A Unção de Davi"},' +
    '"MAR_13": {"REFS":"", "CAPBIBLIA":"I Samuel 17 a 19", "SIGLAES":"PP", "CAPES":"63", "NOMES":"Davi e Golias"},' +
    '"MAR_14": {"REFS":"", "CAPBIBLIA":"Salmos 34 e 57; I Samuel 20 a 22", "SIGLAES":"PP", "CAPES":"64", "NOMES":"A Fuga de Davi"},' +
    '"MAR_15": {"REFS":"", "CAPBIBLIA":"Salmos 121 e I Samuel 23 a 26", "SIGLAES":"PP", "CAPES":"65", "NOMES":"A Magnanimidade de Davi"},' +
    '"MAR_16": {"REFS":"", "CAPBIBLIA":"I Samuel 27 e 31 e I Crônicas 10", "SIGLAES":"PP", "CAPES":"66", "NOMES":"A Morte de Saul"},' +
    '"MAR_17": {"REFS":"", "CAPBIBLIA":"I Samuel 28", "SIGLAES":"PP", "CAPES":"67", "NOMES":"Feitiçaria Antiga e Moderna"},' +
    '"MAR_18": {"REFS":"", "CAPBIBLIA":"I Samuel 29 e 30 e II Samuel 1", "SIGLAES":"PP", "CAPES":"68", "NOMES":"Davi em Ziclague"},' +
    '"MAR_19": {"REFS":"", "CAPBIBLIA":"II Samuel 2 a 5 e I Crônicas 11", "SIGLAES":"PP", "CAPES":"69", "NOMES":"Davi chamado ao trono"},' +
    '"MAR_20": {"REFS":"", "CAPBIBLIA":"II Samuel 6 a 10 e I Crônicas 12, 16 e 17", "SIGLAES":"PP", "CAPES":"70", "NOMES":"O Reinado de Davi"},' +
    '"MAR_21": {"REFS":"", "CAPBIBLIA":"Salmos 32 e 51, II Samuel 11 a 14", "SIGLAES":"PP", "CAPES":"71", "NOMES":"O Pecado e Arrependimento de Davi"},' +
    '"MAR_22": {"REFS":"", "CAPBIBLIA":"Salmos 3, II Samuel 15 a 20", "SIGLAES":"PP", "CAPES":"72", "NOMES":"Rebelião de Absalão"},' +
    '"MAR_23": {"REFS":"", "CAPBIBLIA":"Salmos 18, II Samuel 21 a 24", "SIGLAES":"PP", "CAPES":"73", "NOMES":"Os Últimos anos de Davi"},' +
    '"MAR_24": {"REFS":"", "CAPBIBLIA":"I Reis 1 a 3", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_25": {"REFS":"", "CAPBIBLIA":"II Crônicas 1, I Reis 4 a 6", "SIGLAES":"PR", "CAPES":"01", "NOMES":"Salomão"},' +
    '"MAR_26": {"REFS":"", "CAPBIBLIA":"II Crônicas 2, I Reis 7 e 8", "SIGLAES":"PR", "CAPES":"02", "NOMES":"O Templo e sua Dedicação"},' +
    '"MAR_27": {"REFS":"", "CAPBIBLIA":"II Crônicas 3, I Reis 9 e 10", "SIGLAES":"PR", "CAPES":"03", "NOMES":"Orgulho da Prosperidade"},' +
    '"MAR_28": {"REFS":"", "CAPBIBLIA":"II Crônicas 4 e 5, I Reis 11", "SIGLAES":"PR", "CAPES":"04", "NOMES":"Resultado da Transgressão"},' +
    '"MAR_29": {"REFS":"", "CAPBIBLIA":"II Crônicas 6 a 9", "SIGLAES":"PR", "CAPES":"05", "NOMES":"O Arrependimento"},' +
    '"MAR_30": {"REFS":"", "CAPBIBLIA":"I Reis 12 e 13", "SIGLAES":"PR", "CAPES":"06", "NOMES":"O Reino Resgatado"},' +
    '"MAR_31": {"REFS":"", "CAPBIBLIA":"II Crônicas 10 e 11, I Reis 14", "SIGLAES":"PR", "CAPES":"07", "NOMES":"Jeroboão"},' +
    '"ABR_1": {"REFS":"", "CAPBIBLIA":"II Crônicas 12, I Reis 15 e 16", "SIGLAES":"PR", "CAPES":"08", "NOMES":"Apostasia Nacional"},' +
    '"ABR_2": {"REFS":"", "CAPBIBLIA":"II Crônicas 13 e 14, I Reis 17", "SIGLAES":"PR", "CAPES":"09", "NOMES":"Elias o Tesbita"},' +
    '"ABR_3": {"REFS":"", "CAPBIBLIA":"II Crônicas 15 e 16, I Reis 18:1-19", "SIGLAES":"PR", "CAPES":"10", "NOMES":"A Voz de Severa Repreensão"},' +
    '"ABR_4": {"REFS":"", "CAPBIBLIA":"II Crônicas 18 e 19, I Reis 18:20-46", "SIGLAES":"PR", "CAPES":"11", "NOMES":"O Carmelo"},' +
    '"ABR_5": {"REFS":"", "CAPBIBLIA":"II Crônicas 20 e 21", "SIGLAES":"PR", "CAPES":"12", "NOMES":"De Jezreel a Horebe"},' +
    '"ABR_6": {"REFS":"", "CAPBIBLIA":"II Crônicas 22 e 23 e I Reis 19", "SIGLAES":"PR", "CAPES":"13", "NOMES":"Que Fazer aqui?"},' +
    '"ABR_7": {"REFS":"", "CAPBIBLIA":"I Reis 20 a 22", "SIGLAES":"PR", "CAPES":"14", "NOMES":"No Espírito e Virtude de Elias"},' +
    '"ABR_8": {"REFS":"", "CAPBIBLIA":"I Crônicas 1 e 2, II Crônicas 17", "SIGLAES":"PR", "CAPES":"15", "NOMES":"Josafá"},' +
    '"ABR_9": {"REFS":"", "CAPBIBLIA":"I Crônicas 3 e 4", "SIGLAES":"PR", "CAPES":"16", "NOMES":"A queda da Casa de Acabe"},' +
    '"ABR_10": {"REFS":"", "CAPBIBLIA":"I Crônicas 5, II Reis 1 e 2", "SIGLAES":"PR", "CAPES":"17", "NOMES":"O Chamado de Elizeu"},' +
    '"ABR_11": {"REFS":"", "CAPBIBLIA":"II Reis 3 e 12", "SIGLAES":"PR", "CAPES":"18", "NOMES":"As Águas Purificadas"},' +
    '"ABR_12": {"REFS":"", "CAPBIBLIA":"II Reis 4,13 e 14", "SIGLAES":"PR", "CAPES":"19", "NOMES":"Um Profeta de Paz"},' +
    '"ABR_13": {"REFS":"", "CAPBIBLIA":"II Reis 5 a 8", "SIGLAES":"PR", "CAPES":"20", "NOMES":"Naamã"},' +
    '"ABR_14": {"REFS":"", "CAPBIBLIA":"II Reis 9 a 11", "SIGLAES":"PR", "CAPES":"21", "NOMES":"O Fim do Ministério de Elizeu"},' +
    '"ABR_15": {"REFS":"", "CAPBIBLIA":"Jonas 1 a 4", "SIGLAES":"PR", "CAPES":"22", "NOMES":"A Grande Cidade de Nínive"},' +
    '"ABR_16": {"REFS":"", "CAPBIBLIA":"Oséias 1 a 3", "SIGLAES":"PR", "CAPES":"23", "NOMES":"O Cativeiro Assírio"},' +
    '"ABR_17": {"REFS":"", "CAPBIBLIA":"Oséias 4 a 10", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"ABR_18": {"REFS":"", "CAPBIBLIA":"Oséias 11 a 14", "SIGLAES":"PR", "CAPES":"24", "NOMES":"Destr: Porque lhe Falta Conhecimento"},' +
    '"ABR_19": {"REFS":"", "CAPBIBLIA":"Isaías 1 a 6", "SIGLAES":"PR", "CAPES":"25", "NOMES":"O chamado de Isaías"},' +
    '"ABR_20": {"REFS":"", "CAPBIBLIA":"Isaías 40 a 42", "SIGLAES":"PR", "CAPES":"26", "NOMES":"Eis aqui está o vosso Deus"},' +
    '"ABR_21": {"REFS":"", "CAPBIBLIA":"II Crônicas 28, II Reis 15 a 17", "SIGLAES":"PR", "CAPES":"27", "NOMES":"Acaz"},' +
    '"ABR_22": {"REFS":"", "CAPBIBLIA":"Isaías 37 a 39, II Reis 18 a 20", "SIGLAES":"PR", "CAPES":"28", "NOMES":"Ezequias"},' +
    '"ABR_23": {"REFS":"", "CAPBIBLIA":"II Crônicas 29 a 32", "SIGLAES":"PR", "CAPES":"29", "NOMES":"Os Embaixadores de Babilônia"},' +
    '"ABR_24": {"REFS":"", "CAPBIBLIA":"Naum 1 a 3", "SIGLAES":"PR", "CAPES":"30", "NOMES":"Liberto da Assíria"},' +
    '"ABR_25": {"REFS":"", "CAPBIBLIA":"Isaías 7 a 11", "SIGLAES":"PR", "CAPES":"31", "NOMES":"Esperança para os Gentios"},' +
    '"ABR_26": {"REFS":"", "CAPBIBLIA":"II Reis 21 a 23", "SIGLAES":"PR", "CAPES":"32", "NOMES":"Manassés e Josias"},' +
    '"ABR_27": {"REFS":"", "CAPBIBLIA":"II Crônicas 24 a 27", "SIGLAES":"PR", "CAPES":"33", "NOMES":"O Livro da Lei"},' +
    '"ABR_28": {"REFS":"", "CAPBIBLIA":"Jeremias 1 a 3", "SIGLAES":"PR", "CAPES":"34", "NOMES":"Jeremias"},' +
    '"ABR_29": {"REFS":"", "CAPBIBLIA":"II Reis 24 e 25", "SIGLAES":"PR", "CAPES":"35", "NOMES":"A Condenação Iminente"},' +
    '"ABR_30": {"REFS":"", "CAPBIBLIA":"II Crônicas 33 a 36", "SIGLAES":"PR", "CAPES":"36", "NOMES":"O Último Rei de Judá"},' +
    '"MAI_1": {"REFS":"", "CAPBIBLIA":"Jeremias 36 a 38", "SIGLAES":"PR", "CAPES":"37", "NOMES":"Levados Cativos para a Babilônia"},' +
    '"MAI_2": {"REFS":"", "CAPBIBLIA":"Jeremias 29 a 32", "SIGLAES":"PR", "CAPES":"38", "NOMES":"Luz em Meio as Trevas"},' +
    '"MAI_3": {"REFS":"", "CAPBIBLIA":"I Crônicas 6 a 8, Daniel 1", "SIGLAES":"PR", "CAPES":"39", "NOMES":"Daniel na Corte Babilônica"},' +
    '"MAI_4": {"REFS":"", "CAPBIBLIA":"Daniel 2, 7 e 8", "SIGLAES":"PR", "CAPES":"40", "NOMES":"O Sonho de Nabucodonosor"},' +
    '"MAI_5": {"REFS":"", "CAPBIBLIA":"I Crônicas 9, Daniel 3", "SIGLAES":"PR", "CAPES":"41", "NOMES":"A Fornalha Ardente"},' +
    '"MAI_6": {"REFS":"", "CAPBIBLIA":"Daniel 4", "SIGLAES":"PR", "CAPES":"42", "NOMES":"A Verdadeira Grandeza"},' +
    '"MAI_7": {"REFS":"", "CAPBIBLIA":"Daniel 5", "SIGLAES":"PR", "CAPES":"43", "NOMES":"O Vigia Invisível"},' +
    '"MAI_8": {"REFS":"", "CAPBIBLIA":"Daniel 6", "SIGLAES":"PR", "CAPES":"44", "NOMES":"Na Cova dos Leões"},' +
    '"MAI_9": {"REFS":"", "CAPBIBLIA":"Esdras 1 a 3", "SIGLAES":"PR", "CAPES":"45", "NOMES":"A Volta do Exílio"},' +
    '"MAI_10": {"REFS":"", "CAPBIBLIA":"Ageu 1 e 2", "SIGLAES":"PR", "CAPES":"46", "NOMES":"Os Profetas de Deus o ajudavam"},' +
    '"MAI_11": {"REFS":"", "CAPBIBLIA":"Zacarias 1 a 4", "SIGLAES":"PR", "CAPES":"47", "NOMES":"Josué e o Anjo"},' +
    '"MAI_12": {"REFS":"", "CAPBIBLIA":"Zacarias 5 a 9", "SIGLAES":"PR", "CAPES":"48", "NOMES":"Nem por Força e Nem por Violência"},' +
    '"MAI_13": {"REFS":"", "CAPBIBLIA":"Ester 1 a 3", "SIGLAES":"PR", "CAPES":"49", "NOMES":"Nos dias da Rainha Ester"},' +
    '"MAI_14": {"REFS":"", "CAPBIBLIA":"Esdras 4 a 6", "SIGLAES":"PR", "CAPES":"50", "NOMES":"Esdras, o Sacerdote e Escriba"},' +
    '"MAI_15": {"REFS":"", "CAPBIBLIA":"Esdras 7 a 10", "SIGLAES":"PR", "CAPES":"51", "NOMES":"Um Reavivamento Espiritual"},' +
    '"MAI_16": {"REFS":"", "CAPBIBLIA":"Neemias 1 e 2", "SIGLAES":"PR", "CAPES":"52", "NOMES":"Um Homem Oportuno"},' +
    '"MAI_17": {"REFS":"", "CAPBIBLIA":"Ester 4, Neemias 3 e 4", "SIGLAES":"PR", "CAPES":"53", "NOMES":"Os Reconstrutores do Muro"},' +
    '"MAI_18": {"REFS":"", "CAPBIBLIA":"Ester 5 a 7, Neemias 5", "SIGLAES":"PR", "CAPES":"54", "NOMES":"Condenadas a Extorção"},' +
    '"MAI_19": {"REFS":"", "CAPBIBLIA":"Ester 8 a 10, Neemias 6", "SIGLAES":"PR", "CAPES":"55", "NOMES":"Ciladas dos Pagãos"},' +
    '"MAI_20": {"REFS":"", "CAPBIBLIA":"Neemias 7 a 10", "SIGLAES":"PR", "CAPES":"56", "NOMES":"Instruídos na Lei de Deus"},' +
    '"MAI_21": {"REFS":"", "CAPBIBLIA":"Neemias 11 a 13", "SIGLAES":"PP", "CAPES":"57", "NOMES":"Reforma"},' +
    '"MAI_22": {"REFS":"", "CAPBIBLIA":"Zacarias 10 a 14", "SIGLAES":"PP", "CAPES":"58", "NOMES":"A Vinda de um Libertador"},' +
    '"MAI_23": {"REFS":"", "CAPBIBLIA":"Malaquias 1 a 4", "SIGLAES":"PP", "CAPES":"59", "NOMES":"A Casa de Israel"},' +
    '"MAI_24": {"REFS":"", "CAPBIBLIA":"Isaías 63 a 66", "SIGLAES":"PP", "CAPES":"60", "NOMES":"Visões da Glõria Futura"},' +
    '"MAI_25": {"REFS":"", "CAPBIBLIA":"Marcos 1 a 3", "SIGLAES":"DTN", "CAPES":"****", "NOMES":"****"},' +
    '"MAI_26": {"REFS":"", "CAPBIBLIA":"Isaías 12 e 13, Mateus 1", "SIGLAES":"DTN", "CAPES":"01", "NOMES":"Deus Conosco"},' +
    '"MAI_27": {"REFS":"", "CAPBIBLIA":"Isaías 14 a 16", "SIGLAES":"DTN", "CAPES":"02", "NOMES":"O Povo Escolhido"},' +
    '"MAI_28": {"REFS":"", "CAPBIBLIA":"Isaías 17 a 19", "SIGLAES":"DTN", "CAPES":"03", "NOMES":"A Plenitude dos tempos"},' +
    '"MAI_29": {"REFS":"", "CAPBIBLIA":"Isaías 20 a 22, Lucas 2:1-20", "SIGLAES":"DTN", "CAPES":"04", "NOMES":"Vos Nasceu Hoje o Salvador"},' +
    '"MAI_30": {"REFS":"", "CAPBIBLIA":"Isaías 23 a 25, Lucas 2:21-38", "SIGLAES":"DTN", "CAPES":"05", "NOMES":"A Dedicação"},' +
    '"MAI_31": {"REFS":"", "CAPBIBLIA":"Isaías 26 a 28, Mateus 2", "SIGLAES":"DTN", "CAPES":"06", "NOMES":"Vimos a Sua Estrela"},' +
    '"JUN_1": {"REFS":"", "CAPBIBLIA":"Isaías 29 e 30, Lucas 2:39-40", "SIGLAES":"DTN", "CAPES":"07", "NOMES":"Em Criança"},' +
    '"JUN_2": {"REFS":"", "CAPBIBLIA":"Isaías 31 a 33, Lucas 2:41-52", "SIGLAES":"DTN", "CAPES":"08", "NOMES":"A Visita Pascoal"},' +
    '"JUN_3": {"REFS":"", "CAPBIBLIA":"Isaías 34 a 36", "SIGLAES":"DTN", "CAPES":"09", "NOMES":"Dias de Luta"},' +
    '"JUN_4": {"REFS":"", "CAPBIBLIA":"Mateus 3:1-12, Lucas 1", "SIGLAES":"DTN", "CAPES":"10", "NOMES":"A Voz do Deserto"},' +
    '"JUN_5": {"REFS":"", "CAPBIBLIA":"Isaías 43 a 45, Mateus 3:13-17", "SIGLAES":"DTN", "CAPES":"11", "NOMES":"O Batismo"},' +
    '"JUN_6": {"REFS":"", "CAPBIBLIA":"Isaías 46, Mateus 4", "SIGLAES":"DTN", "CAPES":"12", "NOMES":"A Tentação"},' +
    '"JUN_7": {"REFS":"", "CAPBIBLIA":"Isaías 47 a 49, Lucas 4:1-13", "SIGLAES":"DTN", "CAPES":"13", "NOMES":"A Vitória"},' +
    '"JUN_8": {"REFS":"", "CAPBIBLIA":"Isaías 50 a 51, João 1", "SIGLAES":"DTN", "CAPES":"14", "NOMES":"Achamos o Messias"},' +
    '"JUN_9": {"REFS":"", "CAPBIBLIA":"Isaías 52 a 53, João 2:1-11", "SIGLAES":"DTN", "CAPES":"15", "NOMES":"Nas Bodas"},' +
    '"JUN_10": {"REFS":"", "CAPBIBLIA":"Isaías 54 e 55, João 2:12-25", "SIGLAES":"DTN", "CAPES":"16", "NOMES":"Em Seu Templo"},' +
    '"JUN_11": {"REFS":"", "CAPBIBLIA":"Isaías 60 a 62, João 3:1-21", "SIGLAES":"DTN", "CAPES":"17", "NOMES":"Nicodemos"},' +
    '"JUN_12": {"REFS":"", "CAPBIBLIA":"Jeremias 4 a 6, João 3:22-36", "SIGLAES":"DTN", "CAPES":"18", "NOMES":"É Necessário que Ele Cresça"},' +
    '"JUN_13": {"REFS":"", "CAPBIBLIA":"Jeremias 7 a 8, João 4:1-42", "SIGLAES":"DTN", "CAPES":"19", "NOMES":"Junto ao poço de Jacó"},' +
    '"JUN_14": {"REFS":"", "CAPBIBLIA":"Jeremias 9 a 11, João 4:43-54", "SIGLAES":"DTN", "CAPES":"20", "NOMES":"Se não virdes Sinais e Milagres"},' +
    '"JUN_15": {"REFS":"", "CAPBIBLIA":"Jeremias 12 e 13, João 5", "SIGLAES":"DTN", "CAPES":"21", "NOMES":"Betesda e o Sinédrio"},' +
    '"JUN_16": {"REFS":"", "CAPBIBLIA":"Jeremias 14 e 15, Marcos 5 e 6:1-29", "SIGLAES":"DTN", "CAPES":"22", "NOMES":"Prisão e Morte de João Batista"},' +
    '"JUN_17": {"REFS":"", "CAPBIBLIA":"Mateus 15 a 17", "SIGLAES":"DTN", "CAPES":"23", "NOMES":"O reino dos Céus está Próximo"},' +
    '"JUN_18": {"REFS":"", "CAPBIBLIA":"Lucas 3 e 4:14-44", "SIGLAES":"DTN", "CAPES":"24", "NOMES":"Não é este o Filho do Carpinteiro?"},' +
    '"JUN_19": {"REFS":"", "CAPBIBLIA":"Jeremias 16 a 18, Lucas 5:1-11", "SIGLAES":"DTN", "CAPES":"25", "NOMES":"O Chamado a Beira do Mar"},' +
    '"JUN_20": {"REFS":"", "CAPBIBLIA":"Jeremias 19 a 21", "SIGLAES":"DTN", "CAPES":"26", "NOMES":"Em Cafarnaum"},' +
    '"JUN_21": {"REFS":"", "CAPBIBLIA":"Jeremias 22 a 24, Lucas 5:12-26", "SIGLAES":"DTN", "CAPES":"27", "NOMES":"Podes tornar-me limpo"},' +
    '"JUN_22": {"REFS":"", "CAPBIBLIA":"Jeremias 25 a 26, Lucas 5:27-39", "SIGLAES":"DTN", "CAPES":"28", "NOMES":"Levi Mateus"},' +
    '"JUN_23": {"REFS":"", "CAPBIBLIA":"Isaías 57 a 59, Mateus 12:1-14, Lucas 6:1-11", "SIGLAES":"DTN", "CAPES":"29", "NOMES":"O Sábado"},' +
    '"JUN_24": {"REFS":"", "CAPBIBLIA":"Jeremias 27 e 28, Lucas 6:12-49", "SIGLAES":"DTN", "CAPES":"30", "NOMES":"Nomeou Doze"},' +
    '"JUN_25": {"REFS":"", "CAPBIBLIA":"Mateus 5 a 7", "SIGLAES":"DTN", "CAPES":"31", "NOMES":"O Sermão da Montanha"},' +
    '"JUN_26": {"REFS":"", "CAPBIBLIA":"Mateus 8 e 9, Lucas 7", "SIGLAES":"DTN", "CAPES":"32", "NOMES":"O Centurião"},' +
    '"JUN_27": {"REFS":"", "CAPBIBLIA":"Mateus 10 e 14, Mateus 12:15-50", "SIGLAES":"DTN", "CAPES":"33", "NOMES":"Quem são os Meus Irmãos?"},' +
    '"JUN_28": {"REFS":"", "CAPBIBLIA":"Jeremias 33 e 34, Mateus 11", "SIGLAES":"DTN", "CAPES":"34", "NOMES":"O Convite"},' +
    '"JUN_29": {"REFS":"", "CAPBIBLIA":"Jeremias 35, Lucas 8:1-39", "SIGLAES":"DTN", "CAPES":"35", "NOMES":"Cala-te, Aquieta-te"},' +
    '"JUN_30": {"REFS":"", "CAPBIBLIA":"Jeremias 39 a 41, Lucas 8:40-56", "SIGLAES":"DTN", "CAPES":"36", "NOMES":"O Toque da Fé"},' +
    '"JUL_1": {"REFS":"", "CAPBIBLIA":"Jeremias 42 e 43, Lucas 9:1-27", "SIGLAES":"DTN", "CAPES":"37", "NOMES":"Os Primeiros Evangelistas"},' +
    '"JUL_2": {"REFS":"", "CAPBIBLIA":"Jeremias 44 e 45, Marcos 6:30-56", "SIGLAES":"DTN", "CAPES":"38", "NOMES":"Vinde...Repousai um Pouco"},' +
    '"JUL_3": {"REFS":"", "CAPBIBLIA":"Jeremias 46 a 47, João 6:1-15", "SIGLAES":"DTN", "CAPES":"39", "NOMES":"Dai-lhe Vós de Comer"},' +
    '"JUL_4": {"REFS":"", "CAPBIBLIA":"Jeremias 48 a 50, João 6:16-21", "SIGLAES":"DTN", "CAPES":"40", "NOMES":"Uma Noite no Lago"},' +
    '"JUL_5": {"REFS":"", "CAPBIBLIA":"Jeremias 51 e 52, João 6:22-71", "SIGLAES":"DTN", "CAPES":"41", "NOMES":"A Crise na Galiléia"},' +
    '"JUL_6": {"REFS":"", "CAPBIBLIA":"Lamentações 1 e 2, Marcos 7:1-23", "SIGLAES":"DTN", "CAPES":"42", "NOMES":"Tradição"},' +
    '"JUL_7": {"REFS":"", "CAPBIBLIA":"Lamentações 3 a 5, Marcos 7:24-37", "SIGLAES":"DTN", "CAPES":"43", "NOMES":"Barreiras Derrubadas"},' +
    '"JUL_8": {"REFS":"", "CAPBIBLIA":"Ezequiel 1 a 3, Marcos 8:1-21", "SIGLAES":"DTN", "CAPES":"44", "NOMES":"O Verdadeiro Sinal"},' +
    '"JUL_9": {"REFS":"", "CAPBIBLIA":"Ezequiel 4 a 6, Marcos 8:22-38", "SIGLAES":"DTN", "CAPES":"45", "NOMES":"A Previsão da Cruz"},' +
    '"JUL_10": {"REFS":"", "CAPBIBLIA":"Ezequiel 7 a 9, Lucas 9:28-26, Marcos 9:1-13, Mateus 17:1-8", "SIGLAES":"DTN", "CAPES":"46", "NOMES":"A Transfiguração"},' +
    '"JUL_11": {"REFS":"", "CAPBIBLIA":"Ezequiel 10 e 11, Lucas 9:37-45, Mateus 17:14-20, Marcos 9:14-29", "SIGLAES":"DTN", "CAPES":"47", "NOMES":"Nada Vos Será Impossível"},' +
    '"JUL_12": {"REFS":"", "CAPBIBLIA":"Ezequiel 12 a 14, Marcos 9:30-50, Lucas 9:46-48", "SIGLAES":"DTN", "CAPES":"48", "NOMES":"Quem é o Maior"},' +
    '"JUL_13": {"REFS":"", "CAPBIBLIA":"Ezequiel 15 a 16, João 7:1-15 e 7:37 a 39", "SIGLAES":"DTN", "CAPES":"49", "NOMES":"A Festa dos Tabernáculos"},' +
    '"JUL_14": {"REFS":"", "CAPBIBLIA":"Ezequiel 17, João 7:16-53", "SIGLAES":"DTN", "CAPES":"50", "NOMES":"Por Entre Laços"},' +
    '"JUL_15": {"REFS":"", "CAPBIBLIA":"Ezequiel 19 e 20, João 8 e 9:1-41", "SIGLAES":"DTN", "CAPES":"51", "NOMES":"A Luz da Vida"},' +
    '"JUL_16": {"REFS":"", "CAPBIBLIA":"Ezequiel 21 e 22, João 10, Salmos 23", "SIGLAES":"DTN", "CAPES":"52", "NOMES":"O divino Pastor"},' +
    '"JUL_17": {"REFS":"", "CAPBIBLIA":"Ezequiel 23 a 25, Lucas 9:46-62", "SIGLAES":"DTN", "CAPES":"53", "NOMES":"A Última jornada da Galiléia"},' +
    '"JUL_18": {"REFS":"", "CAPBIBLIA":"Ezequiel 26 e 27, Lucas 10", "SIGLAES":"DTN", "CAPES":"54", "NOMES":"O Bom Samaritano"},' +
    '"JUL_19": {"REFS":"", "CAPBIBLIA":"Ezequiel 28 e 29, Lucas 17", "SIGLAES":"DTN", "CAPES":"55", "NOMES":"Não com Aparência Exterior"},' +
    '"JUL_20": {"REFS":"", "CAPBIBLIA":"Ezequiel 30 e 31, Mateus 19:1-15", "SIGLAES":"DTN", "CAPES":"56", "NOMES":"Deixai vir a mim os pequeninos "},' +
    '"JUL_21": {"REFS":"", "CAPBIBLIA":"Ezequiel 32 a 34, Mateus 19:16-30, Lucas 18:18-23", "SIGLAES":"DTN", "CAPES":"57", "NOMES":"Uma coisa te falta"},' +
    '"JUL_22": {"REFS":"", "CAPBIBLIA":"Ezequiel 35 e 36, João 11:1-46", "SIGLAES":"DTN", "CAPES":"58", "NOMES":"Lázaro sai para fora"},' +
    '"JUL_23": {"REFS":"", "CAPBIBLIA":"Ezequiel 37 a 39, João 11:47-57", "SIGLAES":"DTN", "CAPES":"59", "NOMES":"Os Sacerdotes tramam"},' +
    '"JUL_24": {"REFS":"", "CAPBIBLIA":"Ezequiel 40 a 42, Lucas 18:24-34", "SIGLAES":"DTN", "CAPES":"60", "NOMES":"A Lei do Novo Reino"},' +
    '"JUL_25": {"REFS":"", "CAPBIBLIA":"Lucas 19:1-10, Lucas 20, Lucas 21", "SIGLAES":"DTN", "CAPES":"61", "NOMES":"Zaqueu"},' +
    '"JUL_26": {"REFS":"", "CAPBIBLIA":"Ezequiel 43 a 45, João 12:1-11", "SIGLAES":"DTN", "CAPES":"62", "NOMES":"Um Banquete na Casa de Simão"},' +
    '"JUL_27": {"REFS":"", "CAPBIBLIA":"Ezequiel 46 a 48, Lucas 19:28-40, João 12:12-19", "SIGLAES":"DTN", "CAPES":"63", "NOMES":"Eis que Teu Rei Virá"},' +
    '"JUL_28": {"REFS":"", "CAPBIBLIA":"Joel 1 a 3", "SIGLAES":"DTN", "CAPES":"64", "NOMES":"Um Povo Condenado"},' +
    '"JUL_29": {"REFS":"", "CAPBIBLIA":"Lucas 19:45-48, Marcos 10, Marcos 11 e 12:1-12", "SIGLAES":"DTN", "CAPES":"65", "NOMES":"O Templo Novamente Purificado"},' +
    '"JUL_30": {"REFS":"", "CAPBIBLIA":"Amós 1 e 2, Marcos 12:13-44", "SIGLAES":"DTN", "CAPES":"66", "NOMES":"Conflito"},' +
    '"JUL_31": {"REFS":"", "CAPBIBLIA":"Amós 3 e 4, Mateus 23, Marcos 12, Lucas 20:45-47", "SIGLAES":"DTN", "CAPES":"67", "NOMES":"Ais Sobre os Fariseus"},' +
    '"AGO_1": {"REFS":"", "CAPBIBLIA":"Amós 5 a 7, João 12:20-50", "SIGLAES":"DTN", "CAPES":"68", "NOMES":"No Pátio"},' +
    '"AGO_2": {"REFS":"", "CAPBIBLIA":"Amós 8 e 9, Mateus 24, Marcos 13", "SIGLAES":"DTN", "CAPES":"69", "NOMES":"O Monte das Oliveiras"},' +
    '"AGO_3": {"REFS":"", "CAPBIBLIA":"Miquéias 1 a 3, Mateus 25:31-36", "SIGLAES":"DTN", "CAPES":"70", "NOMES":"Um destes Meus Pequeninos Irmãos"},' +
    '"AGO_4": {"REFS":"", "CAPBIBLIA":"Miquéias 4 e 5, João 13:1-20", "SIGLAES":"DTN", "CAPES":"71", "NOMES":"Servo dos Servos"},' +
    '"AGO_5": {"REFS":"", "CAPBIBLIA":"Marcos 14 a 16, Marcos 14:22-26", "SIGLAES":"DTN", "CAPES":"72", "NOMES":"Em memória da mim"},' +
    '"AGO_6": {"REFS":"", "CAPBIBLIA":"João 14 a 17, João 13:31-38", "SIGLAES":"DTN", "CAPES":"73", "NOMES":"Não se Turbe o Vosso Coração"},' +
    '"AGO_7": {"REFS":"", "CAPBIBLIA":"Miquéias 6 e 7, João 18:1-12", "SIGLAES":"DTN", "CAPES":"74", "NOMES":"Getsêmani"},' +
    '"AGO_8": {"REFS":"", "CAPBIBLIA":"Habacuque 1 a 3, João 18:13-27", "SIGLAES":"DTN", "CAPES":"75", "NOMES":"Caifás"},' +
    '"AGO_9": {"REFS":"", "CAPBIBLIA":"Obadias 1, João 13:21-30", "SIGLAES":"DTN", "CAPES":"76", "NOMES":"Judas"},' +
    '"AGO_10": {"REFS":"", "CAPBIBLIA":"Jó 1 a 3, João 18:28-40", "SIGLAES":"DTN", "CAPES":"77", "NOMES":"Na Sala de Julgamento de Pilatos"},' +
    '"AGO_11": {"REFS":"", "CAPBIBLIA":"Jó 4 e 5, Salmos 22, João 19:1-27", "SIGLAES":"DTN", "CAPES":"78", "NOMES":"O Calvário"},' +
    '"AGO_12": {"REFS":"", "CAPBIBLIA":"Jó 6 a 8, João 19:28-37", "SIGLAES":"DTN", "CAPES":"79", "NOMES":"Está Consumado"},' +
    '"AGO_13": {"REFS":"", "CAPBIBLIA":"Mateus 20, João 19:28-42", "SIGLAES":"DTN", "CAPES":"80", "NOMES":"No Sepulcro de José"},' +
    '"AGO_14": {"REFS":"", "CAPBIBLIA":"Mateus 26 e 27, e 28:1-15", "SIGLAES":"DTN", "CAPES":"81", "NOMES":"O Senhor Ressucitou"},' +
    '"AGO_15": {"REFS":"", "CAPBIBLIA":"Jó 9 e 10, João 20:1-18", "SIGLAES":"DTN", "CAPES":"82", "NOMES":"Porque choras?"},' +
    '"AGO_16": {"REFS":"", "CAPBIBLIA":"Lucas 22 a 24", "SIGLAES":"DTN", "CAPES":"83", "NOMES":"A Viagem para Emaús"},' +
    '"AGO_17": {"REFS":"", "CAPBIBLIA":"Jó 11 a 13, João 20:19-31", "SIGLAES":"DTN", "CAPES":"84", "NOMES":"Paz seja Convosco"},' +
    '"AGO_18": {"REFS":"", "CAPBIBLIA":"Jó 14 e 15, João 21", "SIGLAES":"DTN", "CAPES":"85", "NOMES":"Mais uma vez à Beira Mar"},' +
    '"AGO_19": {"REFS":"", "CAPBIBLIA":"Jó 16 a 18, Mateus 28:16-20", "SIGLAES":"DTN", "CAPES":"86", "NOMES":"Ide Ensinai a Todas as Nações"},' +
    '"AGO_20": {"REFS":"", "CAPBIBLIA":"Jó 19 a 24", "SIGLAES":"PJ", "CAPES":"****", "NOMES":"Prefacio"},' +
    '"AGO_21": {"REFS":"", "CAPBIBLIA":"Jó 25 a 27, Mateus 13:34 e 35", "SIGLAES":"PJ", "CAPES":"01", "NOMES":"Ensinando por Parábolas"},' +
    '"AGO_22": {"REFS":"", "CAPBIBLIA":"Jó 28 e 29, Mateus 13:1-23", "SIGLAES":"PJ", "CAPES":"02", "NOMES":"O Semeador saiu a Semear"},' +
    '"AGO_23": {"REFS":"", "CAPBIBLIA":"Jó 30 e 31, Marcos 4", "SIGLAES":"PJ", "CAPES":"03", "NOMES":"Primeiro a Erva depois a Espiga"},' +
    '"AGO_24": {"REFS":"", "CAPBIBLIA":"Jó 32 e 33, Mateus 13:24-43", "SIGLAES":"PJ", "CAPES":"04", "NOMES":"O Joio"},' +
    '"AGO_25": {"REFS":"", "CAPBIBLIA":"Jó 34 e 36, Mateus 13:31-32", "SIGLAES":"PJ", "CAPES":"05", "NOMES":"Semelhante a um Grão de Mostarda"},' +
    '"AGO_26": {"REFS":"", "CAPBIBLIA":"Jó 37 a 39", "SIGLAES":"PJ", "CAPES":"06", "NOMES":"Outras Lições tiradas da Semeadura"},' +
    '"AGO_27": {"REFS":"", "CAPBIBLIA":"Jó 40 a 42, Mateus 13:33", "SIGLAES":"PJ", "CAPES":"07", "NOMES":"Semelhante ao Fermento"},' +
    '"AGO_28": {"REFS":"", "CAPBIBLIA":"Sofonias 1 a 3, Mateus 13:44", "SIGLAES":"PJ", "CAPES":"08", "NOMES":"O Tesouro Escondido"},' +
    '"AGO_29": {"REFS":"", "CAPBIBLIA":"Salmos 25 e 26, Mateus 13:45-46", "SIGLAES":"PJ", "CAPES":"09", "NOMES":"A Pérola"},' +
    '"AGO_30": {"REFS":"", "CAPBIBLIA":"Salmos 27 e 28, Mateus 13:47-58", "SIGLAES":"PJ", "CAPES":"10", "NOMES":"A Rede"},' +
    '"AGO_31": {"REFS":"", "CAPBIBLIA":"Salmos 29 e 30, Mateus 13:51 e 52", "SIGLAES":"PJ", "CAPES":"11", "NOMES":"Coisas Novas e Velhas"},' +
    '"SET_1": {"REFS":"", "CAPBIBLIA":"Salmos 31 e Lucas 11", "SIGLAES":"PJ", "CAPES":"12", "NOMES":"Pedindo para Dar"},' +
    '"SET_2": {"REFS":"", "CAPBIBLIA":"Salmos 33 e 35, Lucas 18:9-14", "SIGLAES":"PJ", "CAPES":"13", "NOMES":"Dois Adoradores"},' +
    '"SET_3": {"REFS":"", "CAPBIBLIA":"Salmos 36 a 38, Luvas 18:1-8", "SIGLAES":"PJ", "CAPES":"14", "NOMES":"Não fará Deus Justiça aos Seus Escolhidos?"},' +
    '"SET_4": {"REFS":"", "CAPBIBLIA":"Salmos 39 a 41, Lucas 15:1-10", "SIGLAES":"PJ", "CAPES":"15", "NOMES":"Este recebe Pecadores"},' +
    '"SET_5": {"REFS":"", "CAPBIBLIA":"Salmos 42 a 44, Lucas 15:11-32", "SIGLAES":"PJ", "CAPES":"16", "NOMES":"Tinha-se Perdido e Achou-se"},' +
    '"SET_6": {"REFS":"", "CAPBIBLIA":"Salmos 45 a 47, Lucas 13", "SIGLAES":"PJ", "CAPES":"17", "NOMES":"Deixa-a Este Ano"},' +
    '"SET_7": {"REFS":"", "CAPBIBLIA":"Salmos 48 a 50, Lucas 14", "SIGLAES":"PJ", "CAPES":"18", "NOMES":"Sai pelos Caminhos e Valados"},' +
    '"SET_8": {"REFS":"", "CAPBIBLIA":"Salmos 52 e 53, Mateus 18", "SIGLAES":"PJ", "CAPES":"19", "NOMES":"A Medida do Perdão"},' +
    '"SET_9": {"REFS":"", "CAPBIBLIA":"Salmos 54 a 55, Lucas 12", "SIGLAES":"PJ", "CAPES":"20", "NOMES":"O Lucro que é Perda"},' +
    '"SET_10": {"REFS":"", "CAPBIBLIA":"Salmos 56, Lucas 16:19-31", "SIGLAES":"PJ", "CAPES":"21", "NOMES":"Está Posto um Grande Abismo"},' +
    '"SET_11": {"REFS":"", "CAPBIBLIA":"Salmos 58 e 59, Mateus 21:1-32", "SIGLAES":"PJ", "CAPES":"22", "NOMES":"Dizendo e Executando"},' +
    '"SET_12": {"REFS":"", "CAPBIBLIA":"Salmos 60 a 62, Mateus 21:33-46", "SIGLAES":"PJ", "CAPES":"23", "NOMES":"A Vinha do Senhor"},' +
    '"SET_13": {"REFS":"", "CAPBIBLIA":"Salmos 63 a 65, Mateus 22", "SIGLAES":"PJ", "CAPES":"24", "NOMES":"Sem Veste Nupcial"},' +
    '"SET_14": {"REFS":"", "CAPBIBLIA":"Salmos 66 a 68, Mateus 25:14-30, Lucas 19:11-27", "SIGLAES":"PJ", "CAPES":"25", "NOMES":"Talentos"},' +
    '"SET_15": {"REFS":"", "CAPBIBLIA":"Salmos 69 a 71, Lucas 16:1-18", "SIGLAES":"PJ", "CAPES":"26", "NOMES":"Amigos e As Riquezas da Injustiça"},' +
    '"SET_16": {"REFS":"", "CAPBIBLIA":"Salmos 72 a 74, Lucas 10:23-37", "SIGLAES":"PJ", "CAPES":"27", "NOMES":"Quem é o meu Próximo"},' +
    '"SET_17": {"REFS":"", "CAPBIBLIA":"Salmos 75 a 77, Lucas 18:15-43", "SIGLAES":"PJ", "CAPES":"28", "NOMES":"O Galardão da Graça"},' +
    '"SET_18": {"REFS":"", "CAPBIBLIA":"Salmos 78 a 80, Mateus 25:1-3", "SIGLAES":"PJ", "CAPES":"29", "NOMES":"O Encontro do Esposo"},' +
    '"SET_19": {"REFS":"", "CAPBIBLIA":"Salmos 81 a 83", "SIGLAES":"AA", "CAPES":"****", "NOMES":"Prefacio"},' +
    '"SET_20": {"REFS":"", "CAPBIBLIA":"Salmos 84 a 86, Mateus 28:18-20", "SIGLAES":"AA", "CAPES":"01", "NOMES":"O Propósito de Deus para Sua Igreja"},' +
    '"SET_21": {"REFS":"", "CAPBIBLIA":"Salmos 87 e 88, Atos 1", "SIGLAES":"AA", "CAPES":"02", "NOMES":"O Preparo dos Doze"},' +
    '"SET_22": {"REFS":"", "CAPBIBLIA":"Salmos 89 e 90, Atos 1:8", "SIGLAES":"AA", "CAPES":"03", "NOMES":"A Grande Missão"},' +
    '"SET_23": {"REFS":"", "CAPBIBLIA":"Salmos 92 e 93, Atos 2:1-13", "SIGLAES":"AA", "CAPES":"04", "NOMES":"O Pentecostes"},' +
    '"SET_24": {"REFS":"", "CAPBIBLIA":"Salmos 94 a 96, Mateus 3:11, Atos 2:14-47", "SIGLAES":"AA", "CAPES":"05", "NOMES":"O Dom do Espírito"},' +
    '"SET_25": {"REFS":"", "CAPBIBLIA":"Salmos 97, Atos 3 e 4", "SIGLAES":"AA", "CAPES":"06", "NOMES":"A Porta do Tenplo"},' +
    '"SET_26": {"REFS":"", "CAPBIBLIA":"Salmos 98 a 100, Atos 5:1-11", "SIGLAES":"AA", "CAPES":"07", "NOMES":"Uma Advertência a Hipocrisia"},' +
    '"SET_27": {"REFS":"", "CAPBIBLIA":"Salmos 101 e 102, Atos 5:12-42", "SIGLAES":"AA", "CAPES":"08", "NOMES":"Perante o Sinédrio"},' +
    '"SET_28": {"REFS":"", "CAPBIBLIA":"Salmos 103 e 104 e Atos 6", "SIGLAES":"AA", "CAPES":"09", "NOMES":"Os Sete Diáconos"},' +
    '"SET_29": {"REFS":"", "CAPBIBLIA":"Salmos 105 e 106 e Atos 7, ", "SIGLAES":"AA", "CAPES":"10", "NOMES":"O Primeiro Mártir Cristão"},' +
    '"SET_30": {"REFS":"", "CAPBIBLIA":"Salmos 107 e 108 e Atos 8", "SIGLAES":"AA", "CAPES":"11", "NOMES":"O Evangelho em Samaria"},' +
    '"OUT_1": {"REFS":"", "CAPBIBLIA":"Salmos 109 e 110, Atos 9:1-18", "SIGLAES":"AA", "CAPES":"12", "NOMES":"De perseguidor a Discípulo"},' +
    '"OUT_2": {"REFS":"", "CAPBIBLIA":"Salmos 111 a 113, Atos 9:19-30", "SIGLAES":"AA", "CAPES":"13", "NOMES":"Dias de Preparo"},' +
    '"OUT_3": {"REFS":"", "CAPBIBLIA":"Salmos 114 e 115, Atos 9 a 11", "SIGLAES":"AA", "CAPES":"14", "NOMES":"Um Inquiridor da Verdade"},' +
    '"OUT_4": {"REFS":"", "CAPBIBLIA":"Salmos 116 a 118, Atos 12", "SIGLAES":"AA", "CAPES":"15", "NOMES":"Libertado da Prisão"},' +
    '"OUT_5": {"REFS":"", "CAPBIBLIA":"Salmos 119, Atos 13:1-3", "SIGLAES":"AA", "CAPES":"16", "NOMES":"A Mensagem do Evangelho em Antioquia"},' +
    '"OUT_6": {"REFS":"", "CAPBIBLIA":"Salmos 120 e 121, Atos 13:4-52", "SIGLAES":"AA", "CAPES":"17", "NOMES":"Arautos do Evngelho"},' +
    '"OUT_7": {"REFS":"", "CAPBIBLIA":"Salmos 122 a 124, Atos 14", "SIGLAES":"AA", "CAPES":"18", "NOMES":"Pregando entre Gentios"},' +
    '"OUT_8": {"REFS":"", "CAPBIBLIA":"Atos 15, Romanos 1 e 2", "SIGLAES":"AA", "CAPES":"19", "NOMES":"Judeus e Gentios"},' +
    '"OUT_9": {"REFS":"", "CAPBIBLIA":"Atos 16:1-5, Romanos 3", "SIGLAES":"AA", "CAPES":"20", "NOMES":"Exaltando a Cruz"},' +
    '"OUT_10": {"REFS":"", "CAPBIBLIA":"Atos 16:6-40, Romanos 4 e 5", "SIGLAES":"AA", "CAPES":"21", "NOMES":"Nas Regiões Distantes"},' +
    '"OUT_11": {"REFS":"", "CAPBIBLIA":"Atos 17:1-9, I Tessalonicenses 1 e 2", "SIGLAES":"AA", "CAPES":"22", "NOMES":"Tessalônica"},' +
    '"OUT_12": {"REFS":"", "CAPBIBLIA":"Atos 17:10-34, I Coríntios 1 a 3", "SIGLAES":"AA", "CAPES":"23", "NOMES":"Beréia e Atenas"},' +
    '"OUT_13": {"REFS":"", "CAPBIBLIA":"Atos 18:1-17, I Coríntios 4 a 6", "SIGLAES":"AA", "CAPES":"24", "NOMES":"Corinto"},' +
    '"OUT_14": {"REFS":"", "CAPBIBLIA":"I Tessalonicenses 3 a 5", "SIGLAES":"AA", "CAPES":"25", "NOMES":"As Cartas aos Tessalonicenses"},' +
    '"OUT_15": {"REFS":"", "CAPBIBLIA":"Atos 18:18-28, I Coríntios 7 a 9", "SIGLAES":"AA", "CAPES":"26", "NOMES":"Apoio em Corinto"},' +
    '"OUT_16": {"REFS":"", "CAPBIBLIA":"Atos 19:1-20, Efésios 1 a 3", "SIGLAES":"AA", "CAPES":"27", "NOMES":"Éfeso"},' +
    '"OUT_17": {"REFS":"", "CAPBIBLIA":"Atos 19:21-41, Efésios 4 a 6", "SIGLAES":"AA", "CAPES":"28", "NOMES":"Dias de Luta e de Prova"},' +
    '"OUT_18": {"REFS":"", "CAPBIBLIA":"I Coríntios 10 a 12", "SIGLAES":"AA", "CAPES":"29", "NOMES":"Mensagem de AAdvertência"},' +
    '"OUT_19": {"REFS":"", "CAPBIBLIA":"I Coríntios 13 a 16", "SIGLAES":"AA", "CAPES":"30", "NOMES":"Chamado a Mais Elevada Ordem"},' +
    '"OUT_20": {"REFS":"", "CAPBIBLIA":"II Coríntios 1 a 3", "SIGLAES":"AA", "CAPES":"31", "NOMES":"A Mensagem Atendida"},' +
    '"OUT_21": {"REFS":"", "CAPBIBLIA":"II Coríntios 4 a 6", "SIGLAES":"AA", "CAPES":"32", "NOMES":"Uma Igreja Liberal"},' +
    '"OUT_22": {"REFS":"", "CAPBIBLIA":"II Coríntios 7 a 9", "SIGLAES":"AA", "CAPES":"33", "NOMES":"Trabalho sobre Dificuldades"},' +
    '"OUT_23": {"REFS":"", "CAPBIBLIA":"II Coríntios 10 a 13", "SIGLAES":"AA", "CAPES":"34", "NOMES":"Ministério Consagrado"},' +
    '"OUT_24": {"REFS":"", "CAPBIBLIA":"Romanos 6 a 8", "SIGLAES":"AA", "CAPES":"35", "NOMES":"Salvação para os Judeus"},' +
    '"OUT_25": {"REFS":"", "CAPBIBLIA":"Gálatas 1 a 3", "SIGLAES":"AA", "CAPES":"36", "NOMES":"Apostasia na Galácia"},' +
    '"OUT_26": {"REFS":"", "CAPBIBLIA":"Gálatas 4 a 6, Atos 20", "SIGLAES":"AA", "CAPES":"37", "NOMES":"A Última Viagem de Paulo"},' +
    '"OUT_27": {"REFS":"", "CAPBIBLIA":"Atos 21 a 23", "SIGLAES":"AA", "CAPES":"38", "NOMES":"Paulo Prisioneiro"},' +
    '"OUT_28": {"REFS":"", "CAPBIBLIA":"Atos 24, Romanos 9 e 10", "SIGLAES":"AA", "CAPES":"39", "NOMES":"Perante o Tribunal de Cesaréia"},' +
    '"OUT_29": {"REFS":"", "CAPBIBLIA":"Atos 25, Romanos 11 e 12", "SIGLAES":"AA", "CAPES":"40", "NOMES":"Paulo Apela para César"},' +
    '"OUT_30": {"REFS":"", "CAPBIBLIA":"Atos 26, Romanos 13 e 14", "SIGLAES":"AA", "CAPES":"41", "NOMES":"Quase Persuadido"},' +
    '"OUT_31": {"REFS":"", "CAPBIBLIA":"Atos 27, Romanos 15 e 16", "SIGLAES":"AA", "CAPES":"42", "NOMES":"A Viagem e o Naufrágio"},' +
    '"NOV_1": {"REFS":"", "CAPBIBLIA":"Filemon 1, Atos 28", "SIGLAES":"AA", "CAPES":"43", "NOMES":"Em Roma"},' +
    '"NOV_2": {"REFS":"", "CAPBIBLIA":"Tito 1 a 3", "SIGLAES":"AA", "CAPES":"44", "NOMES":"Os da Casa de César"},' +
    '"NOV_3": {"REFS":"", "CAPBIBLIA":"Filipenses 1 a 4", "SIGLAES":"AA", "CAPES":"45", "NOMES":"Carta de Roma"},' +
    '"NOV_4": {"REFS":"", "CAPBIBLIA":"Colossenses 1 a 4", "SIGLAES":"AA", "CAPES":"46", "NOMES":"Em Liberdade"},' +
    '"NOV_5": {"REFS":"", "CAPBIBLIA":"I Timóteo 1 a 3", "SIGLAES":"AA", "CAPES":"47", "NOMES":"A Última Prisão"},' +
    '"NOV_6": {"REFS":"", "CAPBIBLIA":"I Timóteo 4 a 6", "SIGLAES":"AA", "CAPES":"48", "NOMES":"Paulo perante Nero"},' +
    '"NOV_7": {"REFS":"", "CAPBIBLIA":"II Timóteo 1 a 4", "SIGLAES":"AA", "CAPES":"49", "NOMES":"Última Carta de Paulo"},' +
    '"NOV_8": {"REFS":"", "CAPBIBLIA":"I Pedro 1 a 3", "SIGLAES":"AA", "CAPES":"50", "NOMES":"Condenado a Morte"},' +
    '"NOV_9": {"REFS":"", "CAPBIBLIA":"I Pedro 4 a 5", "SIGLAES":"AA", "CAPES":"51", "NOMES":"Um Fiel Subpastor"},' +
    '"NOV_10": {"REFS":"", "CAPBIBLIA":"II Pedro 1 a 3", "SIGLAES":"AA", "CAPES":"52", "NOMES":"Firme até o Fim"},' +
    '"NOV_11": {"REFS":"", "CAPBIBLIA":"I João 1 a 5", "SIGLAES":"AA", "CAPES":"53", "NOMES":"João, o Discípulo Amado"},' +
    '"NOV_12": {"REFS":"", "CAPBIBLIA":"II João, III João, Judas", "SIGLAES":"AA", "CAPES":"54", "NOMES":"Uma Fiel Testemunha"},' +
    '"NOV_13": {"REFS":"", "CAPBIBLIA":"Salmos 125 a 130", "SIGLAES":"AA", "CAPES":"55", "NOMES":"Transformação pela Graça"},' +
    '"NOV_14": {"REFS":"", "CAPBIBLIA":"Salmos 131 a 136, Apocalipse 1", "SIGLAES":"AA", "CAPES":"56", "NOMES":"Patmos"},' +
    '"NOV_15": {"REFS":"", "CAPBIBLIA":"Salmos 137 a 140, Apocalipse 2", "SIGLAES":"AA", "CAPES":"57", "NOMES":"O Apocalipse"},' +
    '"NOV_16": {"REFS":"", "CAPBIBLIA":"Salmos 141 a 143, Apocalipse 3", "SIGLAES":"AA", "CAPES":"58", "NOMES":"A Igreja Triunfante"},' +
    '"NOV_17": {"REFS":"", "CAPBIBLIA":"Salmos 146 a 150", "SIGLAES":"GC", "CAPES":"**", "NOMES":"Introdução"},' +
    '"NOV_18": {"REFS":"", "CAPBIBLIA":"Lucas 19:41-44, Apocalipse 4 e 5", "SIGLAES":"GC", "CAPES":"01", "NOMES":"Predito o Destino do Mundo"},' +
    '"NOV_19": {"REFS":"", "CAPBIBLIA":"Provérbios 1 a 3, Mateus 24:9-22, Apocalipse 8", "SIGLAES":"GC", "CAPES":"02", "NOMES":"O Valor dos Mártires"},' +
    '"NOV_20": {"REFS":"", "CAPBIBLIA":"Daniel 7:25, II Tessalonicenses 1 a 3", "SIGLAES":"GC", "CAPES":"03", "NOMES":"Como começaram as Trevas"},' +
    '"NOV_21": {"REFS":"", "CAPBIBLIA":"Apocalipse 7 a 9", "SIGLAES":"GC", "CAPES":"04", "NOMES":"Um Poder que Difunde Luz"},' +
    '"NOV_22": {"REFS":"", "CAPBIBLIA":"Provérbios 4 a 6", "SIGLAES":"GC", "CAPES":"05", "NOMES":"Arautos de uma Era Melhor"},' +
    '"NOV_23": {"REFS":"", "CAPBIBLIA":"Provérbios 7 a 9", "SIGLAES":"GC", "CAPES":"06", "NOMES":"Dois Heróis da Idade Média"},' +
    '"NOV_24": {"REFS":"", "CAPBIBLIA":"Provérbios 10 a 12", "SIGLAES":"GC", "CAPES":"07", "NOMES":"A Influência de um Bom Lar"},' +
    '"NOV_25": {"REFS":"", "CAPBIBLIA":"Provérbios 13 a 15", "SIGLAES":"GC", "CAPES":"08", "NOMES":"O Poder Triunfante da Verdade"},' +
    '"NOV_26": {"REFS":"", "CAPBIBLIA":"Provérbios 16 a 18", "SIGLAES":"GC", "CAPES":"09", "NOMES":"Luz na Suíça"},' +
    '"NOV_27": {"REFS":"", "CAPBIBLIA":"Provérbios 19 a 21", "SIGLAES":"GC", "CAPES":"10", "NOMES":"A Europa Desperta"},' +
    '"NOV_28": {"REFS":"", "CAPBIBLIA":"Provérbios 22 a 24", "SIGLAES":"GC", "CAPES":"11", "NOMES":"Os Príncipes Amparam a Verdade"},' +
    '"NOV_29": {"REFS":"", "CAPBIBLIA":"Eclesiastes 1 a 3", "SIGLAES":"GC", "CAPES":"12", "NOMES":"Os Nobres da França"},' +
    '"NOV_30": {"REFS":"", "CAPBIBLIA":"Eclesiastes 4 a 6", "SIGLAES":"GC", "CAPES":"13", "NOMES":"Liberdade nos Países Baixos"},' +
    '"DEZ_1": {"REFS":"", "CAPBIBLIA":"Eclesiastes 7 e 8", "SIGLAES":"GC", "CAPES":"14", "NOMES":"Progressos na Inglaterra"},' +
    '"DEZ_2": {"REFS":"", "CAPBIBLIA":"Eclesiastes 10 e 11, Apocalipse 11", "SIGLAES":"GC", "CAPES":"15", "NOMES":"A Escritura Sagrada e a Revolução Francesa"},' +
    '"DEZ_3": {"REFS":"", "CAPBIBLIA":"Cantares 1 a 3", "SIGLAES":"GC", "CAPES":"16", "NOMES":"O Mais Sagrado Direito do Homem"},' +
    '"DEZ_4": {"REFS":"", "CAPBIBLIA":"Cantares 4 a 6", "SIGLAES":"GC", "CAPES":"17", "NOMES":"A Esperança que Infunde a Alegria"},' +
    '"DEZ_5": {"REFS":"", "CAPBIBLIA":"Cantares 7 a 8", "SIGLAES":"GC", "CAPES":"18", "NOMES":"Uma Profecia muito Significativa"},' +
    '"DEZ_6": {"REFS":"", "CAPBIBLIA":"Salmos 144 e 145", "SIGLAES":"GC", "CAPES":"19", "NOMES":"Luz para os Nossos Dias"},' +
    '"DEZ_7": {"REFS":"", "CAPBIBLIA":"Apocalipse 14:6-7", "SIGLAES":"GC", "CAPES":"20", "NOMES":"Um Grande Movimento Mundial"},' +
    '"DEZ_8": {"REFS":"", "CAPBIBLIA":"Hebreus 1 a 5, Apocalipse 14:8", "SIGLAES":"GC", "CAPES":"21", "NOMES":"A Causa da Degradação Atual"},' +
    '"DEZ_9": {"REFS":"", "CAPBIBLIA":"Provérbios 25, Apocalipse 10", "SIGLAES":"GC", "CAPES":"22", "NOMES":"Profecias Alentadoras"},' +
    '"DEZ_10": {"REFS":"", "CAPBIBLIA":"Daniel 9:25-27, Levítico 16:14, Hebreus 8 e 9, Daniel 8", "SIGLAES":"GC", "CAPES":"23", "NOMES":"O Santuário Celestial"},' +
    '"DEZ_11": {"REFS":"", "CAPBIBLIA":"Daniel 8:14, Daniel 9, Eclesiastes 11:9-10, Eclesiastes 12", "SIGLAES":"GC", "CAPES":"24", "NOMES":"Quando começa o Julgamento Divino"},' +
    '"DEZ_12": {"REFS":"", "CAPBIBLIA":"Hebreus 6 e 7, Êxodo 20", "SIGLAES":"GC", "CAPES":"25", "NOMES":"A Imutável Lei de Deus"},' +
    '"DEZ_13": {"REFS":"", "CAPBIBLIA":"Hebreus 10 e 11, Isaías 56", "SIGLAES":"GC", "CAPES":"26", "NOMES":"Restauração da Verdade"},' +
    '"DEZ_14": {"REFS":"", "CAPBIBLIA":"Hebreus 12 e 13", "SIGLAES":"GC", "CAPES":"27", "NOMES":"A Vida que Satisfaz"},' +
    '"DEZ_15": {"REFS":"", "CAPBIBLIA":"Tiago 1 a 3, Daniel 7", "SIGLAES":"GC", "CAPES":"28", "NOMES":"O Grande Juízo"},' +
    '"DEZ_16": {"REFS":"", "CAPBIBLIA":"Tiago 4 e 5", "SIGLAES":"GC", "CAPES":"29", "NOMES":"A Origem do Mal e da Dor"},' +
    '"DEZ_17": {"REFS":"", "CAPBIBLIA":"1 Crônicas 18 a 20", "SIGLAES":"GC", "CAPES":"30", "NOMES":"O Pior Inimigo do Homem"},' +
    '"DEZ_18": {"REFS":"", "CAPBIBLIA":"1 Crônicas 21 a 23", "SIGLAES":"GC", "CAPES":"31", "NOMES":"Os Invisíveis Defensores dos Homens"},' +
    '"DEZ_19": {"REFS":"", "CAPBIBLIA":"1 Crônicas 24 e 25, Apocalipse 12", "SIGLAES":"GC", "CAPES":"32", "NOMES":"Os Ardis de Satanás"},' +
    '"DEZ_20": {"REFS":"", "CAPBIBLIA":"Ezequiel 18:18, Eclesiastes 9:8", "SIGLAES":"GC", "CAPES":"33", "NOMES":"É o Homem Importal?"},' +
    '"DEZ_21": {"REFS":"", "CAPBIBLIA":"1 Crônicas 26 e 27, Êxodo 22, Apocalipse 21", "SIGLAES":"GC", "CAPES":"34", "NOMES":"Oferece o Espiritismo alguma Esperança?"},' +
    '"DEZ_22": {"REFS":"", "CAPBIBLIA":"Apocalipse 13 e 14", "SIGLAES":"GC", "CAPES":"35", "NOMES":"Ameaça a Consciência"},' +
    '"DEZ_23": {"REFS":"", "CAPBIBLIA":"1 Crônicas 28 e 29", "SIGLAES":"GC", "CAPES":"36", "NOMES":"O Maior Perigo para o Lar"},' +
    '"DEZ_24": {"REFS":"", "CAPBIBLIA":"Provérbios 26 a 28", "SIGLAES":"GC", "CAPES":"37", "NOMES":"Nossa Única Salvaguarda"},' +
    '"DEZ_25": {"REFS":"", "CAPBIBLIA":"Provérbios 29, Apocalipse 17 e 18", "SIGLAES":"GC", "CAPES":"38", "NOMES":"O Último Convite Divino"},' +
    '"DEZ_26": {"REFS":"", "CAPBIBLIA":"Salmos 91, Apocalipse 15 e 16, Daniel 10 a 12", "SIGLAES":"GC", "CAPES":"39", "NOMES":"Aproxima-se o Tempo de Angústia"},' +
    '"DEZ_27": {"REFS":"", "CAPBIBLIA":"Apocalipse 6 e 19", "SIGLAES":"GC", "CAPES":"40", "NOMES":"O Livramento dos Justos"},' +
    '"DEZ_28": {"REFS":"", "CAPBIBLIA":"Provérbios 30 e 31, Apocalipse 20", "SIGLAES":"GC", "CAPES":"41", "NOMES":"Será desolada a Terra"},' +
    '"DEZ_29": {"REFS":"", "CAPBIBLIA":"Salmos 46, Apocalipse 21 e 22", "SIGLAES":"GC", "CAPES":"42", "NOMES":"O Final e Glorioso Triunfo"},' +
    '"DEZ_30": {"REFS":"", "CAPBIBLIA":"Revisão Geral do Velho Testamento", "SIGLAES":"**", "CAPES":"**", "NOMES":"****"},' +
    '"DEZ_31": {"REFS":"", "CAPBIBLIA":"Revisão Geral do Novo Testamento", "SIGLAES":"**", "CAPES":"**", "NOMES":"****"}' +
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

function getURLPDF(sigla){
    let urls = Object.assign({}, JSON.parse(urllivrospdf));
    return urls[sigla];
}
//fixme problema quando lvro is null
function getURLLivro(sigla){
    let urls = Object.assign({}, JSON.parse(urllivros));
    if (urls[sigla] == "") {
        //let x = getURLPDF(sigla);
        alert('ARQUIVO INDISPONÍVEL');
        return "";
    }
    return urls[sigla];
}

/**
 * 
 * @param String referencia
 * 
 * Entradas: MAT_1
 *           MAT_1:5-8
 *           [PSA_1, PSA_2, PSA_23:2-4] 
 */

function getVersosCapitulo(referencia) {
             let versos = [];
             let chave = referencia + '_1';
             let i = 1;
             while(blv[chave] != undefined) {
                versos.push(chave);
                i += 1;
                chave = referencia + '_' + i;
             }
             return versos;
}

function getVersosRangeCapitulo(referencia) {
    const partes = referencia.split(':');
    const ref = partes[0];
    const cauda = partes[1];
    const porcoes = cauda.split('-');
    const inicio = porcoes[0];
    const fim = porcoes[1];
    let versos=[];
    for (let i = inicio; i <= fim; i++) {
        versos.push(ref + '_' + i);
    }
    return versos;
}

function getVersos(referencia) {
          // tem range de versiculos ?
          let versos = [];
          if (referencia.indexOf('-') < 0) {
               // console.log('passou 2');
                versos = getVersosCapitulo(referencia);
          } else {
               // console.log('passou 3');
                versos = getVersosRangeCapitulo(referencia);
          }
          return versos;
}

function calcularEndereco(referencia) {
    let versos = [];
    // tem multiplas referencias
    if (referencia.indexOf(',') < 0) {
       //console.log('passou 1');
       versos = getVersos(referencia);
    } else {
       let items = referencia.split(',');
       items.forEach(element => {
           let temp = getVersos( element.trim() );
           versos = versos.concat(temp);
       });
    }
    return versos;
}

function lerTexto(referencia) {
       return blv[referencia];
}

function reiniciar() {
    const storage = window.localStorage;
    storage.clear();
    atualizarMeses();
}
