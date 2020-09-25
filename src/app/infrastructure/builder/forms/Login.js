import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import Button from 'src/app/infrastructure/components/fields/Button'

export default class Login extends FormBuilder {
  createFields () {
    this.addField(new Input()
      .setLabel('E-mail')
      .setModel('email')
      .setColumnClass('col-xs-12')
      .setFilled(true)
      .setAutofocus(true)
      .setHasPrepend(true)
      .setPrependIcon('email')
    )

    this.addField(new Input()
      .setLabel('Password')
      .setModel('password')
      .setType('password')
      .setColumnClass('col-xs-12')
      .setFilled(true)
      .setHasPrepend(true)
      .setPrependIcon('vpn_key')
    )

    this.addField(new Button()
      .setLabel('Login')
      .setColumnClass('col-xs-12')
      .setClass('full-width button-color')
      .setClick('login')
    )

    this.addField(new Button()
      .setLabel('Forgot your password?')
      .setFlat(true)
      .setNoCaps(true)
      .setRipple({ color: 'red' })
      .setColumnClass('col-xs-6')
      .setColor('brand')
      .setClass('full-width')
      .setRipple(false)
    )

    this.addField(new Button()
      .setLabel('Create an account')
      .setNoCaps(true)
      .setFlat(true)
      .setTextColor('grey-9')
      .setColumnClass('col-xs-6')
      .setClass('full-width')
      .setRipple(false)
    )
  }
}
