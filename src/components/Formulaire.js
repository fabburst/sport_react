import React from 'react'
import { Input, Button } from 'antd';

const inputStyle = {
    minWidth: '240px',
    width:'calc(1/3*100%)',
    maxWidth:'320px'
}
const Exercice = () =>(
    <div style={{ marginBottom: '16px'}}>
    <Input addonBefore='Exercice' style={{ maxWidth: '400px'}}/>
    <Input addonBefore='Série'style={inputStyle} />
    <Input addonBefore='Répétitions'style={inputStyle} />
    <Input addonBefore='Repos' addonAfter='secondes' style={inputStyle}/>
    </div>
    )

const Formulaire = () =>(
    <form>
        <Exercice/>
        <Exercice/>
        <Exercice/>
        <Exercice/>
        <Button
        type='primary'htmlType='submit'>Envoyer le PDF
        </Button>
    </form>
)

export default Formulaire