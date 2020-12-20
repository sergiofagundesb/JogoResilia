    var nomeUm = "Carl";
    var nomeDois = "Robson";
    var nomeTres = "Lewis";
    var localUm = "Long Beach";
    var localDois = "Riverside";
    var localTres = "Anaheim";
    var choice, esc1,esc2,esc3,esc4,esc5,esc6,esc7;
    document.getElementById("escolhaum").innerText = localUm;
    document.getElementById("escolhadois").innerText = localDois;
    document.getElementById("escolhatres").innerText = localTres;
    function preInicio(numero)
    {
        switch(numero)
        {
            case 1:
                alert(`Seu nome é ${nomeUm} e você está na cidade de ${localUm}`);
                break;
            case 2:
                alert(`Seu nome é ${nomeDois} e você está na cidade de ${localDois}`);
                break;
            case 3:
                alert(`Seu nome é ${nomeTres} e você está na cidade de ${localTres}`);
                break;
        }
        iniciarUm();
    }
    function iniciarUm()
    {
        choice = parseInt(window.prompt("Deseja sair para explorar a cidade(1) ou se manter confinado?(0)"));
        if(choice == 0)
        {
            esc2 = parseInt(window.prompt("Passaram-se dias e os suprimentos estão acabando. Deseja continuar confinado(0) ou sair para a cidade?(1)"));
            if(esc2 == 0)
            {
                esc3 = parseInt(window.prompt("[DERROTA] Inevitavelmente, com a falta de comida, água e remédios seu personagem morreu. Deseja tentar novamente? Sim(1), Não(0);"));
                if(esc3 == 0)
                {
                    return location.href = "inicio.html";
                }
                else if (esc3 == 1)
                {
                    return location.href = "escolher_cidade.html";
                }
                else
                {
                    esc3 = parseInt(window.prompt("[DERROTA] Inevitavelmente, com a falta de comida, água e remédios seu personagem morreu. Deseja tentar novamente? Sim(1), Não(0);"));
                }
            }
            else if(esc2 == 1)
            {
                esc3 = parseInt(window.prompt("Você está andando cautelosamente pela cidade, atento a qualquer possível ataque zumbi e devidamente armado para qualquer eventual ataque quando de repente, encontra por uma pessoa pedindo socorro. você irá salvá-la? Sim(1) Não(0)"));     
                if(esc3 == 1)
                {
                    esc4 = parseInt(window.prompt("Você ajudou essa pessoa pedindo socorro, ela disse que se chama John e ouviu rumores de que no interior da Califórnia há \"safe zones \".Deseja juntar-se a ele para buscar as safe zones(1) ou ir sozinho?(0)"));
                    if(esc4 == 0)
                    {
                        esc5 = parseInt(window.prompt("[DERROTA]Você foi surpreendido por um ataque de zumbis e por estar sozinho, não conseguiu reagir a tempo. Deseja tentar novamente? Sim(1) Não(0)"));
                        if(esc5 == 0)
                        {
                            return location.href = "inicio.html";
                        }
                        else
                        {
                            return location.href = "escolher_cidade.html";
                        }
                    }
                    else if(esc4 == 1)
                    {
                        if(esc4 == 1)
                        {
                            esc5 = parseInt(window.prompt("Você e seu novo parceiro John encontram um carro abandonado, que precisa de poucos reparos e pode ser uma boa ideia para ir até o interior do estado em busca de uma safe zone. Desejam tentar reparar o carro? Sim(1) Não(0)"));
                            if(esc5 == 0)
                            {
                                esc6 = parseInt(window.prompt("[DERROTA] Após horas de caminhada em busca de chegar a uma safe zone e suprimentos, inevitavelmente o cansaço e desatenção de vocês dois o tornaram expostos a ataques zumbis(talvez reparar aquele carro fosse uma boa ideia. Deseja reiniciar o jogo? Sim(1) Não(0)"));
                                if(esc6 == 0)
                                {
                                    return location.href = "inicio.html";
                                }
                                else
                                {
                                    return location.href = "escolher_cidade.html";
                                }
                            }
                            else if(esc5 == 1)
                            {
                                esc6 = parseInt(window.prompt("Um desconhecido pede carona no meio do trajeto para a safe zone. Dar carona? Sim(1) Não(0)"));  
                                if(esc6 == 0)
                                {
                                    alert("[FINAL] Parabéns. Você e John conseguiram chegar a salvos até uma zona segura onde há cientistas e sobreviventes remanescentes que tentam se defender e desenvolver um antídoto.");
                                }
                                else if(esc6 == 1)
                                {
                                    alert("[FINAL] Parabéns. Você, John e Matthew conseguiram chegar a salvos até uma zona segura onde há cientistas e sobreviventes remanescentes que tentam se defender e desenvolver um antídoto.");
                                }
                                else
                                {
                                    esc6 = parseInt(window.prompt("Um desconhecido pede carona no meio do trajeto para a safe zone. Dar carona? Sim(1) Não(0)"));  
                                }
                            }
                            else
                            {
                                esc5 = parseInt(window.prompt("Você e seu novo parceiro John encontram um carro abandonado, que precisa de poucos reparos e pode ser uma boa ideia para ir até o interior do estado em busca de uma safe zone. Desejam tentar reparar o carro? Sim(1) Não(0)"));
                            }
                        }
                        else
                        {
                            esc5 = parseInt(window.prompt("Você e seu novo parceiro John encontram um carro abandonado, que precisa de poucos reparos e pode ser uma boa ideia para ir até o interior do estado em busca de uma safe zone. Desejam tentar reparar o carro? Sim(1) Não(0)"));
                        }
                    }
                    else
                    {
                        esc4 = parseInt(window.prompt("Você ajudou essa pessoa pedindo socorro, ela disse que se chama John e ouviu rumores de que no interior da Califórnia há \"safe zones \".Deseja juntar-se a ele para buscar as safe zones(1) ou ir sozinho?(0)"));
                    }  
                }
                else if(esc3 == 0)
                {
                    esc4 = parseInt(window.prompt("[DERROTA]Você foi surpreendido por um ataque de zumbis e por estar sozinho, não conseguiu reagir a tempo. Deseja tentar novamente? Sim(1) Não(0)"));
                    if(esc4 == 0)
                    {
                        return location.href = "inicio.html";
                    }
                    else
                    {
                        return location.href = "escolher_cidade.html";
                    }     
                }
                else
                {
                    esc3 = parseInt(window.prompt("Você está andando cautelosamente pela cidade, atento a qualquer possível ataque zumbi e devidamente armado para qualquer eventual ataque quando de repente, encontra por uma pessoa pedindo socorro. você irá salvá-la? Sim(1) Não(0)"));     
                }
            }
            else
            {
                esc2 = parseInt(window.prompt("Passaram-se dias e os suprimentos estão acabando. Deseja continuar confinado(0) ou sair para a cidade?(1)"));
            }
        }
        else if(choice == 1)
        {
            esc3 = parseInt(window.prompt("Você está andando cautelosamente pela cidade, atento a qualquer possível ataque zumbi e devidamente armado para qualquer eventual ataque quando de repente, encontra por uma pessoa pedindo socorro. você irá salvá-la? Sim(1) Não(0)")); 
            if(esc3 == 1)
            {
                esc4 = parseInt(window.prompt("Você ajudou essa pessoa pedindo socorro, ela disse que se chama John e ouviu rumores de que no interior da Califórnia há \"safe zones \".Deseja juntar-se a ele para buscar as safe zones(1) ou ir sozinho?(0)"));
                if(esc4 == 0)
                {
                    esc5 = parseInt(window.prompt("[DERROTA]Você foi surpreendido por um ataque de zumbis e por estar sozinho, não conseguiu reagir a tempo. Deseja tentar novamente? Sim(1) Não(0)"));
                    if(esc5 == 0)
                    {
                        return location.href = "inicio.html";
                    }
                    else
                    {
                        return location.href = "escolher_cidade.html";
                    }
                }
                if(esc4 == 1)
                {
                    esc5 = parseInt(window.prompt("Você e seu novo parceiro John encontram um carro abandonado, que precisa de poucos reparos e pode ser uma boa ideia para ir até o interior do estado em busca de uma safe zone. Desejam tentar reparar o carro? Sim(1) Não(0)"));
                    if(esc5 == 0)
                    {
                        esc6 = parseInt(window.prompt("[DERROTA] Após horas de caminhada em busca de chegar a uma safe zone e suprimentos, inevitavelmente o cansaço e desatenção de vocês dois o tornaram expostos a ataques zumbis(talvez reparar aquele carro fosse uma boa ideia. Deseja reiniciar o jogo? Sim(1) Não(0)"));
                        if(esc6 == 0)
                        {
                            return location.href = "inicio.html";
                        }
                        else
                        {
                            return location.href = "escolher_cidade.html";
                        }
                    }
                    else if(esc5 == 1)
                    {
                        esc7 = parseInt(window.prompt("Um desconhecido pede carona no meio do trajeto para a safe zone. Dar carona? Sim(1) Não(0)"));  
                        if(esc7 == 0)
                        {
                            alert("[FINAL] Parabéns. Você e John conseguiram chegar a salvos até uma zona segura onde há cientistas e sobreviventes remanescentes que tentam se defender e desenvolver um antídoto.");
                        }
                        else if(esc7 == 1)
                        {
                            alert("[FINAL] Parabéns. Você, John e Matthew conseguiram chegar a salvos até uma zona segura onde há cientistas e sobreviventes remanescentes que tentam se defender e desenvolver um antídoto.");
                        }
                        else
                        {
                            esc7 = parseInt(window.prompt("Um desconhecido pede carona no meio do trajeto para a safe zone. Dar carona? Sim(1) Não(0)"));  
                        }
                    }
                    else
                    {
                        esc5 = parseInt(window.prompt("Você e seu novo parceiro John encontram um carro abandonado, que precisa de poucos reparos e pode ser uma boa ideia para ir até o interior do estado em busca de uma safe zone. Desejam tentar reparar o carro? Sim(1) Não(0)"));
                    }
                }
            }
            else if(esc3 == 0)
            {
                esc4 = parseInt(window.prompt("[DERROTA]Você seguiu com seu caminho, explorando por água, comida e remédios, mas inesperadamente na esquina de uma rua haviam mais de uma dezena de zumbis, que o surpreenderam e por estar sozinho a pé você nada pôde fazer. Deseja tentar novamente? Sim(1) Não(0)"));
            }
            else
            {
                esc3 = parseInt(window.prompt("Você está andando cautelosamente pela cidade, atento a qualquer possível ataque zumbi e devidamente armado para qualquer eventual ataque quando de repente, encontra por uma pessoa pedindo socorro. você irá salvá-la? Sim(1) Não(0)")); 
            }
        }
        else
        {
            choice = parseInt(window.prompt("Deseja sair para explorar a cidade(1) ou se manter confinado?(0)"));
        }
    }

