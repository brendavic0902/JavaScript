let produtoEmbalado = {
    nome : "Laptop HD",
    categoria : "eletronicos",
    peso : 1.5,
    preco : 3500.00,
}

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}Kg, esta á venda por ${produtoEmbalado.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)