import {useState}  from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './RegistrationForm.module.css'
export default function RegistrationForm(){
    const navigate=useNavigate();
    const [error,setError]=useState({name:null,username:null,email:null,mobile:null,checkbox:null});
    const [formData,setFormData]=useState({name:"",username:"",email:"",mobile:"",checkbox:false});
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=()=>{
        let isErrors=false;
        if(formData.name.trim().length===0){
        setError((prev)=>(
            {...prev,name:"name is required"}
        ));
        isErrors=true;
        }else{
            setError((prev)=>(
                {...prev,name:null}
            ));
        }
        if(formData.username.trim().length===0){
            setError((prev)=>(
                {...prev,username:"username is required"}
            ));
            isErrors=true;
        }else{
            setError((prev)=>(
                {...prev,username:null}
            ));
        }
        if(formData.email.trim().length===0){
            setError((prev)=>(
                {...prev,email:"email is required"}
            ));
            isErrors=true;
        }else{
            setError((prev)=>(
                {...prev,email:null}
            ));
        }
        if(formData.mobile.trim().length===0){
            setError((prev)=>(
                {...prev,mobile:"mobile is required"}
            ));
            isErrors=true;
        }else{
            setError((prev)=>(
                {...prev,mobile:null}
            ));
        }
        if(formData.checkbox===false){
            setError((prev)=>(
                {...prev,checkbox:"please accept terms and conditions"}
            ));
            isErrors=true;
        }else{
            setError((prev)=>(
                {...prev,checkbox:null}
            ));
        }
        if(!isErrors){
           navigate("./choice");
        }
        console.log(formData);
    }
    return (
    <div className={styles.container}>
        <div className={styles.title}> super app</div>
            <div className={styles.div}>create your own account</div>
            <form className={styles.form}>
                <input 
                value={formData.name} 
                className={styles.input} 
                placeholder="Name" 
                type="text" 
                name="name" 
                onChange={handleChange}/>
                {error.name ? <p>{error.name}</p> :<></>}
                <input value={formData.username} className={styles.input} placeholder="UserName" type="text" name="username" onChange={handleChange}/>
                {error.username ? <p>{error.username}</p> :<></>}
                <input value={formData.email}  className={styles.input} placeholder="Email" type="email" name="email" onChange={handleChange}/>
                {error.email ? <p>{error.email}</p> :<></>}
                <input value={formData.mobile} className={styles.input} placeholder="Mobile" type="text" name="mobile" onChange={handleChange}/>
                {error.mobile ? <p>{error.mobile}</p> :<></>}
                <div className={styles.checkbox}>
                <input value={formData.checkbox} type="checkbox" id="checkbox" name="checkbox" onChange={handleChange}/>
                <label className={styles.checkboxLabel} htmlFor="checkbox">Share my registration data with Superapp</label>
                </div>
                {error.checkbox ? <p>{error.checkbox}</p> :<></>}
                <button  type="button" onClick={handleSubmit} >Sign up</button>
            </form>
            <div className={styles.rules}>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></div>
            <div className={styles.rules}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></div>
    </div>
    );
}

