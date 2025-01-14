import React, { useContext, useState } from 'react';
import { BASKET } from '../../Context/BasketContext';

function Final() {
  const { sebet } = useContext(BASKET)
  const totalSum = sebet && sebet.length > 0
    ? sebet.reduce((total, item) => total + item.count * item.current, 0)
    : 0
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    nit: '',
    direccion: '',
    colonia: '',
    codigoPostal: '',
    telefono: '',
    email: '',
  })

  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
    validateInput(name, value);
  }
  const validateInput = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'nombre':
        if (!/^\d+$/.test(value)) {
          errorMessage = 'Bu sahə yalnız rəqəmlərdən ibarət olmalıdır.';
        }
        break;
      case 'apellidos':
        if (value.length < 2) {
          errorMessage = 'Bu sahə ən azı 2 simvol olmalıdır.';
        }
        break;
      case 'nit':
        if (!/^\d{4}-\d{4}-\d{4}$/.test(value)) {
          errorMessage = 'NIT formatı: 1234-5678-9012 olmalıdır.';
        }
        break;
      case 'direccion':
        if (value.length < 5) {
          errorMessage = 'Bu sahə ən azı 5 simvol olmalıdır.';
        }
        break;
      case 'telefono':
        if (!/^\d{8,15}$/.test(value)) {
          errorMessage = 'Telefon nömrəsi 8-15 rəqəm olmalıdır.';
        }
        break;
      case 'email':
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          errorMessage = 'Düzgün bir e-posta ünvanı daxil edin.';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMessage
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = Object.values(errors).filter(error => error)
    const emptyFields = Object.values(formData).some(field => field === '')

    if (validationErrors.length > 0 || emptyFields) {
      alert('Zəhmət olmasa, bütün sahələri düzgün doldurun.')
      return
    }
    alert('Form göndərildi!')
  }

  return (
    <div>
      <div className="flex flex-col laptop:flex-row mob:gap-8 mob:p-8">
        <div className="w-full laptop:w-2/3 bg-white p-6 rounded-md shadow-md h-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Detalles de facturación</h2>
          <form className="grid grid-cols-1 tablet:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
                value={formData.nombre}
                onChange={handleChange}
                pattern="\d+" // Yalnız rəqəm qəbul etmək üçün
              />
              {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Apellidos <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
                value={formData.apellidos}
                onChange={handleChange}
              />
              {errors.apellidos && <p className="text-red-500 text-xs">{errors.apellidos}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NIT <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nit"
                placeholder="NIT / CF"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
                value={formData.nit}
                onChange={handleChange}
              />
              {errors.nit && <p className="text-red-500 text-xs">{errors.nit}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dirección <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="direccion"
                placeholder="Calle o avenida, número de la casa y zona"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
                value={formData.direccion}
                onChange={handleChange}
              />
              {errors.direccion && <p className="text-red-500 text-xs">{errors.direccion}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Colonia, apartamento (opcional)</label>
              <input
                type="text"
                name="colonia"
                placeholder="Colonia, no. apartamento"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                maxLength={50}
                value={formData.colonia}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Código postal (opcional)</label>
              <input
                type="text"
                name="codigoPostal"
                placeholder="Código postal"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                maxLength={10}
                value={formData.codigoPostal}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
                value={formData.telefono}
                onChange={handleChange}
              />
              {errors.telefono && <p className="text-red-500 text-xs">{errors.telefono}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dirección de correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Dirección de correo electrónico"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <button type="submit" disabled={sebet.length === 0 || Object.values(errors).some(error => error)}
              className={`w-full bg-[#d0c5ad] mob:text-sm text-white py-2 mt-4 rounded-md ${
                sebet.length === 0 || Object.values(errors).some(error => error) ? '' : 'hover:bg-[#748371] transition'
              }`}>
              Realizar el pedido
            </button>
          </form>
        </div>

        <div className="w-full laptop:w-1/3 bg-white p-6 rounded-md shadow-md text-[10px] overflow-x-auto scroll-hidden">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Tu pedido</h2>
          <table className="w-full border border-gray-300 mob:text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2 border-b">Producto</th>
                <th className="text-right px-4 py-2 border-b">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {
                sebet && sebet.length > 0 ? (
                  sebet.map((item, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2 border-b">{item.name} × {item.count}</td>
                      <td className="px-4 py-2 text-right border-b">Q{item.current}.00</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="px-4 py-2 text-center">Empty</td>
                  </tr>
                )
              }
              <tr>
                <td className="px-4 py-2 font-semibold">Subtotal</td>
                <td className="px-4 py-2 text-right">Q{totalSum}.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Envío</td>
                <td className="px-4 py-2 text-right">Precio fijo: Q38.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Total</td>
                <td className="px-4 py-2 text-right font-bold">Q{totalSum + 38}.00</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8 p-4 text-[9px] mob:text-[16px] bg-gray-100 border border-gray-300 rounded-md">
            <h3 className="mob:text-md font-semibold mb-2 text-gray-700">Transferencia bancaria</h3>
            <p className="mob:text-sm text-gray-600">
              Realiza tu pago directamente en nuestra cuenta bancaria. Por favor, usa el número del pedido como referencia
              en tu pago. Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final