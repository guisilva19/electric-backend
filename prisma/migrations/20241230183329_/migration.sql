/*
  Warnings:

  - You are about to drop the `homologation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "homologation" DROP CONSTRAINT "homologation_user_id_fkey";

-- DropTable
DROP TABLE "homologation";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homologacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT,
    "telefone" TEXT,
    "email" TEXT,
    "numero_conta_contrato" TEXT,
    "distancia_entre_inversor_e_distribuicao" TEXT,
    "tipo_de_ligacao" TEXT,
    "tensao_de_fornecimento" TEXT,
    "disjuntor_do_padrao" TEXT,
    "cabo_do_padrao" TEXT,
    "ampliacao" BOOLEAN,
    "carga_instalada" TEXT,
    "total_de_inversores" INTEGER,
    "total_de_modulos" INTEGER,
    "modelo_do_inversor_inserido" TEXT,
    "modelo_do_modulo_inserido" TEXT,
    "quantidade_modulos_inseridos" TEXT,
    "quantidade_inversores_inseridos" TEXT,
    "modelo_do_inversor_homologado" TEXT,
    "modelo_do_modulo_homologado" TEXT,
    "quantidade_modulos_homologados" TEXT,
    "quantidade_inversores_homologados" TEXT,
    "quantidade_medidores" TEXT,
    "transformador" BOOLEAN,
    "status_pagamento" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "link_pagamento" TEXT,
    "outras_conta_recebera_credito" BOOLEAN,
    "contas_receber_credito" JSONB,

    CONSTRAINT "homologacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documento" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "homologacao_id" TEXT NOT NULL,

    CONSTRAINT "documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orcamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "valor_da_conta_de_luz" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orcamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "documento" ADD CONSTRAINT "documento_homologacao_id_fkey" FOREIGN KEY ("homologacao_id") REFERENCES "homologacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
