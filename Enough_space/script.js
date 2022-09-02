function enough_space(m_size, f_x, f_y){
    if (f_x+2*f_y<=m_size)
    {
        document.write("Ram can be save the file")
    }
    else{
        document.write("Ram can not be save the file \n\ becouse the file size is larger then the available space of memory");
    }

}
enough_space(6,1,2)