import "./Form.css";
import { useForm } from "react-hook-form";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import "bootstrap-icons/font/bootstrap-icons.css";
import "daisyui/dist/full.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className="wrapper">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1>Registro</h1>
        <input
          type="text"
          placeholder="Nombre"
          className="input input-bordered w-full max-w-xs"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre requerido",
            },
            minLength: {
              value: 3,
              message: "debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "debe tener menos de 20 caracteres",
            },
          })}
        />
        {errors?.nombre && <p>{errors.nombre.message}</p>}
        <MdDriveFileRenameOutline className="icon" />

        <input
          type="email"
          placeholder="Correo"
          className="input input-bordered w-full max-w-xs"
          {...register("correo", {
            required: true,
          })}
        />
        <MdEmail className="icon" />

        {errors.Correo?.type === "required" && <p>Correo requerido</p>}

        <input
          type="password"
          placeholder="Contraseña"
          className="input input-bordered w-full max-w-xs"
          {...register("contraseña", {
            required: true,
          })}
        />
        <RiLockPasswordFill className="icon" />

        {errors.contraseña?.type === "required" && <p>Contraseña requerida</p>}

        <input
          type="password"
          placeholder="Confirmar Contraseña"
          className="input input-bordered w-full max-w-xs"
          {...register("confirmarContraseña", {
            required: true,
          })}
        />
        <RiLockPasswordLine className="icon" />

        {errors.confirmarContraseña?.type === "required" && (
          <p>Contraseña requerida</p>
        )}

        <input
          type="date"
          placeholder="Fecha de nacimiento"
          className="input input-bordered w-full max-w-xs"
          {...register("fechaNacimiento", {
            required: true,
          })}
        />

        {errors.fechaNacimiento?.type === "required" && <p>Fecha requerida</p>}

        <div className="pais">
          <select className="select w-full max-w-xs">
            <option disabled selected>
              País
            </option>
            <option value={"ar"}>Argentina</option>
            <option value={"mx"}>Mexico</option>
            <option value={"co"}>Colombia</option>
          </select>
        </div>

        <div className="foto">
          <input type="file" className="file-input w-full max-w-xs" />
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Terminos y Condiciones</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        {errors.terminos?.type === "required" && <p>Este campo es requerido</p>}

        <div className="boton">
          <button class="btn-60" type="submit">
            <span>Enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
