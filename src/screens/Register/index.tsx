import React, { useState } from "react";

import { Modal } from 'react-native'

import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Input } from "../../components/Forms/Input";

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes,
 } from "./styles";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { CategorySelect } from "../CategorySelect";

export function Register(){
    
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState('');

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    function handleTransactionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                    placeholder="Nome"
                    />
                    <Input 
                    placeholder="Preço"
                    />

                    <TransactionTypes>
                        <TransactionTypeButton 
                        type= "up"
                        title= "Income"
                        onPress={() => handleTransactionTypeSelect('up')}
                        isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton 
                        type= "down"
                        title= "Outcome"
                        onPress={() => handleTransactionTypeSelect('down')}
                        isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>

                    <CategorySelectButton 
                        title="Categoria"
                        onPress={handleOpenSelectCategoryModal}
                    
                    />

                </Fields>
              
                <Button title="Enviar"/>
            </Form>

            <Modal
            visible={categoryModalOpen}
            >
                <CategorySelect 
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>

        </Container>
    );
}