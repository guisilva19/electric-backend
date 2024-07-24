-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homologation" (
    "id" SERIAL NOT NULL,
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
    "user_id" TEXT NOT NULL,

    CONSTRAINT "homologation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "homologation_user_id_key" ON "homologation"("user_id");

-- AddForeignKey
ALTER TABLE "homologation" ADD CONSTRAINT "homologation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
