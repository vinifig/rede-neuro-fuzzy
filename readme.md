# Rede Neuro-Fuzzy

Material didático conceitual e técnico sobre redes neuro-fuzzy.

## Introdução

Uma rede neural artificial, é um modelo matemático utilizado no aprendizado de máquina.

Um dos problemas dela é identificar conceitualmente o significado de um valor, por exemplo, tomar decisões com base no peso de um saco de feijão.

O peso do saco de feijão por si só não é uma boa informação para uma tomada de decisão. Mas, e se, tivessemos um intermediário para classificar o peso do saco de feijão semanticamente? Se um dado com valor aleatório é classificado e limitado, você diminui as brechas de aprendizado. Por exemplo ao falar "Compre um saco pesado de feijão", como definimos o que é um saco pesado de feijão? Quando ele se torna muito pesado?

Para isso existe um modelo chamado Redes Neuro-Fuzzy, que utiliza de sistemas fuzzy para melhorar dados pouco precisos de alguma característica.

## Sistemas fuzzy

Um sistema fuzzy classifica valores que podem causar ambiguidade em seu significado, para facilitar a compreensão e entendimento do dado.

Por exemplo, como decidir se uma pessoa é alta? Medir ela e arbitrariamente dizer se ela é alta?

Uma maneira é definir limites e classificar o dado entre estes limites, conforme a tabela abaixo

| Classificação |       Altura      |
|:-------------:|:-----------------:|
|     Baixa     |       < 1.50      |
|     Normal    | >= 1.50 e <= 1.80 |
|      Alta     |       > 1.80      |

## Implementação de uma rede neuro-fuzzy

### O problema

Considere que você é responsável por decidir o caminho que um entregador de encomendas fará, sua tarefa é escolher o melhor percurso, levando em conta os riscos e o tempo do percurso.
