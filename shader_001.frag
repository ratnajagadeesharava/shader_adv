// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float sigmoid(float x){
    return 1.0/(1.0+exp(-x));
}

float dumbequation(float x,float y){
    float diff = 0.01;
    if(x - y > diff){
        return 1.0;
    }
    else if (y-x>diff){
        return 0.0;
    }
    else{
        return sigmoid(x*y);
    }
}
float sinFun(float x){
    float pi = 3.14;
    float a = 0.1;
    float b = 12.0;
    return (a*sin(pi*b*x));
}
float DrawSin(float x,float y){
    
    if(y - (sinFun(x))>0.0){
        if(y - (sinFun(x)) >0.008){
            return 0.0;
        }
        return x;
    }
    
    else{
        return 0.0;
    }
    
}

float modulo(float x, float m){
    return mod(x,m);
}

float polyFun(float x,float y){
    float fa = 1.0;
    float fb = 1.372;
    float fc = 0.496;
    float z = fa*pow(x,2.648)+fb*x+fc;
    float pa = 0.5;
    if(z-y<pa){
        if(z-y < pa-0.004){
            return 1.0;
        }
       
        return 0.0;
        
    }
    
    else{
        return 1.0;
    }
    // return y;
}
 void drawMathFun(float y, float x){
     
 }
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float a= 1.4;
    float b=1.0;
    float y = mod(st.x,0.5);
	float z  = 1.0-pow(st.x,0.5);
    y  = 1.0-max(0.0,(st.x)*2.0-1.0);
    vec3 color = vec3(1.0,y,z);
    float time = abs(sin(u_time)*a)+a;
    float v = 2.0*(mod(sin(st.x*time),0.121*abs(sin(time*sin(st.y)*1.2))));
    v=v+ abs(sin(pow(st.x,2.0)*sigmoid(pow((st.y),1.0))*time));
    v = pow(v,1.2)+0.2;
    gl_FragColor = vec4(v*0.2,v*0.8,v*0.1,1.0);
}