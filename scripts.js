/*type into the input box, press the add button and it will create the li and the content  */

const 

.zanka{
background: url(../content/Images/Zanka/zanka_bg.png) no-repeat;

    
    --rudo-blackred:  #010A11;
    --rudo-darkred:#233B63;
    --rudo-red:#2958A8;
    --rudo-lightred: #D3DEF6;

    

    .title-bar{
        width: 416px;
        height: 24px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--rudo-darkred);
        
        
        .title-icons{
            display: flex;
            gap: 10px;
            margin: 0 5px;
            img{
                height: 20px;
                width: 20px;
            }
        }
    }  


    .heading{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        h1{
            font-size: 20px;
            color: var(--rudo-red);
            margin: 15px 0 0 0;
        }

        .arrows{
            display: flex;
            gap: 20px;
            /* margin: 0px 0 10px 0; */
        }
    }

    .input-field{

        display: flex;
        flex-direction: row;
        gap: 6px;
        margin: 10px 0;

        #inputBox{
            box-sizing: border-box;
            border: none;
            background-color: var(--rudo-darkred);
            width: 315px;
            height: 34px;
            border-radius: 30px;
            text-indent: 10px;

        }
        #inputBox::placeholder{
            color: var(--rudo-blackred);
            padding:5px 15px ;
            font-size: 12px;

        }

        #addTask{
            background-color: var(--rudo-red);
            border-radius: 21px;
            width: 34px;
            height: 34px;
            border: none;
            cursor: pointer;
            align-items: center;

            img{
                max-height: 100%;
                margin: 7px 3px;     
            }
         

        }
    }

    .task-added{
        color: var(--rudo-lightred);
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 10px;    
        width: 363px;
        
        ul{
            padding: 0;
            margin: 0;
        }

        .taskvv{
            display: flex;
            align-items: center;
            padding:0 16px;
            background-color: var(--rudo-red);
            border-radius: 40px;
            border: 2px solid var(--rudo-lightred);
            height: 40px;

            .to-do-text{
                font-size: 14px;
                padding: 10px;
                padding-right: 0;
                flex-grow: 1;
            }

            .delete-button{
                background: none;
                border: none;
                color: var(--rudo-lightred);
                
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 3px;

                cursor: pointer;
                transition: 150ms ease; /*color transtion slower*/

                
            }
            
            .delete-button:hover{
                color: var(--rudo-blackred);
            }

                .custom-checkbox{ /*the circle checkbox*/
                    border: 2px solid var(--rudo-lightred);
                    border-radius: 50% ;
                    background-color: var(--rudo-lightred);
                    min-height: 20px;
                    min-width: 20px;
                    display: flex;
                    
                    flex-shrink: 0; 
                    transition: 200ms ease;
                    cursor: pointer;
                }

                input[type="checkbox"]:checked ~ .custom-checkbox{
                    background-color: var(--rudo-red);
                    border: 2px solid var(--rudo-red);
                }
                
           
                input[type="checkbox"]:checked ~ .to-do-text{
                    text-decoration: 2px line-through;
                    color: var(--rudo-red);
                 }          
                 
                 input[type="checkbox"]:checked ~ .delete-button{
                    color: var(--rudo-red);
                 }           

                 input[type="checkbox"]{ /*hides the orginal checkbox*/
                    display: none;
                 }
        }

        
         .taskvv:has(input:checked) {
            background-color: var(--rudo-lightred);  
            border:2px solid var(--rudo-red);       
            } 
       
    }

}