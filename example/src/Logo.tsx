import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
import findValue from '@pabloadoue/find-value';
import { useTheme } from 'native-base';
import { Validator } from 'renaissance-ui';

export default function Logo(props: TLogoProps) {
    const { colors } = useTheme();
    let fillColor = colors.primary['500'];

    if (typeof props.color === 'string') {
        const value = findValue(colors, props.color);
        if (value) {
            fillColor = value;
        } else if (Validator.isHexColor(props.color)) {
            fillColor = props.color;
        }
    }

    const height = props.size;
    const width = props.size * 7.45;

    return (
        <Svg width={width} height={height} viewBox={`0 0 256 34.34`}>
            <Defs>
                <ClipPath id="clip-path">
                    <Rect
                        id="Rectangle_1"
                        data-name="Rectangle 1"
                        width={'256'}
                        height={'34.4'}
                        fill={fillColor}
                    />
                </ClipPath>
            </Defs>
            <G id="Group_2" data-name="Group 2" transform="translate(0 -3)">
                <G
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(0 0)"
                    clipPath="url(#clip-path)"
                >
                    <Path
                        id="Path_1"
                        data-name="Path 1"
                        d="M42.474,8.161A1,1,0,0,0,41.551,7.1a.8.8,0,0,0-.14,0H21.871a.966.966,0,0,0-.757.3L.3,28.369a1.028,1.028,0,0,0,.758,1.749H16.478a.982.982,0,0,0,.76-.3l19.07-19a5.406,5.406,0,0,1,3.725-1.594h1.442a1.138,1.138,0,0,0,.987-1.063Z"
                        transform="translate(0 2.515)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_2"
                        data-name="Path 2"
                        d="M38.861,30.447V7.55h2.305a1.268,1.268,0,0,1,.9.249,1.519,1.519,0,0,1,.339.859l.271,3.572a10.488,10.488,0,0,1,2.905-3.741,6.834,6.834,0,0,1,5.775-1.131,6,6,0,0,1,1.423.6l-.52,3.005a.678.678,0,0,1-.7.565,3.49,3.49,0,0,1-.971-.214,6.115,6.115,0,0,0-1.831-.215,5.189,5.189,0,0,0-3.515,1.22,9.16,9.16,0,0,0-2.362,3.549v14.58Z"
                        transform="translate(13.773 2.532)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_3"
                        data-name="Path 3"
                        d="M61.8,7.176a10.2,10.2,0,0,1,3.8.689,8.53,8.53,0,0,1,3.007,1.99,9.079,9.079,0,0,1,1.977,3.209,12.389,12.389,0,0,1,.712,4.352,2.621,2.621,0,0,1-.2,1.265.846.846,0,0,1-.768.317H55.089a12.642,12.642,0,0,0,.588,3.776,7.693,7.693,0,0,0,1.493,2.678,5.958,5.958,0,0,0,2.261,1.6,7.765,7.765,0,0,0,2.938.531,8.6,8.6,0,0,0,2.61-.351,12.416,12.416,0,0,0,1.888-.757,13.951,13.951,0,0,0,1.322-.757,1.743,1.743,0,0,1,.916-.349.888.888,0,0,1,.769.383L71,27.225A7.659,7.659,0,0,1,69.215,28.8a11.07,11.07,0,0,1-2.225,1.1,14.108,14.108,0,0,1-2.453.645,15.081,15.081,0,0,1-2.508.214,11.645,11.645,0,0,1-4.375-.8A9.6,9.6,0,0,1,54.2,27.6a10.785,10.785,0,0,1-2.27-3.83,15.569,15.569,0,0,1-.814-5.244,13.365,13.365,0,0,1,.734-4.476,10.533,10.533,0,0,1,2.114-3.6,9.712,9.712,0,0,1,3.367-2.4A11.044,11.044,0,0,1,61.8,7.176m.089,2.961A6.179,6.179,0,0,0,57.3,11.822a7.921,7.921,0,0,0-2.079,4.667H67.678a8.165,8.165,0,0,0-.383-2.567,5.738,5.738,0,0,0-1.131-2.011A5.057,5.057,0,0,0,64.346,10.6a6.153,6.153,0,0,0-2.454-.463"
                        transform="translate(18.115 2.544)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_4"
                        data-name="Path 4"
                        d="M86.939,30.447H85.154a2.136,2.136,0,0,1-.951-.18,1,1,0,0,1-.474-.769l-.452-2.124q-.9.813-1.763,1.457a10.075,10.075,0,0,1-1.808,1.085,9.3,9.3,0,0,1-2.022.668,11.739,11.739,0,0,1-2.385.225,8.175,8.175,0,0,1-2.5-.372,5.694,5.694,0,0,1-2.022-1.124,5.348,5.348,0,0,1-1.367-1.893,6.624,6.624,0,0,1-.509-2.71,5.077,5.077,0,0,1,.745-2.621,6.579,6.579,0,0,1,2.408-2.233,15.641,15.641,0,0,1,4.352-1.6,29.68,29.68,0,0,1,6.577-.624v-1.8a6.232,6.232,0,0,0-1.142-4.061A4.137,4.137,0,0,0,78.462,10.4a7.146,7.146,0,0,0-2.475.374,9.306,9.306,0,0,0-1.74.836c-.489.309-.913.588-1.266.836a1.821,1.821,0,0,1-1.051.374,1.209,1.209,0,0,1-.711-.214,1.648,1.648,0,0,1-.488-.532l-.722-1.288A13.084,13.084,0,0,1,74.1,8.048a12.64,12.64,0,0,1,4.86-.9,8.692,8.692,0,0,1,3.414.633,7.018,7.018,0,0,1,2.508,1.763,7.5,7.5,0,0,1,1.537,2.735,11.4,11.4,0,0,1,.52,3.527ZM76.5,27.983a8.274,8.274,0,0,0,1.945-.214,7.7,7.7,0,0,0,1.661-.611,8.865,8.865,0,0,0,1.493-.96,12.867,12.867,0,0,0,1.39-1.289V20.185a26.908,26.908,0,0,0-4.724.354,13.187,13.187,0,0,0-3.164.921A4.426,4.426,0,0,0,73.319,22.8a2.9,2.9,0,0,0-.553,1.727,3.829,3.829,0,0,0,.294,1.57,2.951,2.951,0,0,0,.791,1.079,3.091,3.091,0,0,0,1.174.614,5.3,5.3,0,0,0,1.47.194"
                        transform="translate(24.42 2.532)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_5"
                        data-name="Path 5"
                        d="M92.2,2.894a2.553,2.553,0,0,1-.236,1.1,3.2,3.2,0,0,1-.634.9,2.95,2.95,0,0,1-.916.62,2.728,2.728,0,0,1-1.107.226,2.656,2.656,0,0,1-1.1-.226A2.992,2.992,0,0,1,86.684,3.99a2.671,2.671,0,0,1-.226-1.1,2.84,2.84,0,0,1,.226-1.12A2.9,2.9,0,0,1,87.3.848a3,3,0,0,1,.9-.622A2.678,2.678,0,0,1,89.306,0a2.75,2.75,0,0,1,1.107.226,2.954,2.954,0,0,1,.916.622,3.1,3.1,0,0,1,.634.926,2.712,2.712,0,0,1,.236,1.12m-.9,30.084H87.271v-22.9h4.024Z"
                        transform="translate(30.642 0)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_6"
                        data-name="Path 6"
                        d="M108.876,11.312a.892.892,0,0,1-.836.5,1.578,1.578,0,0,1-.769-.248c-.286-.167-.637-.351-1.051-.555a10.167,10.167,0,0,0-1.48-.565,7.074,7.074,0,0,0-2.034-.259,6,6,0,0,0-1.831.259,4.43,4.43,0,0,0-1.391.712A3.145,3.145,0,0,0,98.6,12.2a2.829,2.829,0,0,0-.306,1.3,2.164,2.164,0,0,0,.509,1.47,4.406,4.406,0,0,0,1.345,1.017,11.749,11.749,0,0,0,1.9.756c.707.219,1.436.452,2.181.7s1.474.523,2.182.825a7.977,7.977,0,0,1,1.9,1.13,5.2,5.2,0,0,1,1.345,1.662,5.09,5.09,0,0,1,.508,2.362,7.477,7.477,0,0,1-.565,2.927,6.4,6.4,0,0,1-1.673,2.33,8.058,8.058,0,0,1-2.713,1.547,11.111,11.111,0,0,1-3.706.565,11.562,11.562,0,0,1-4.341-.779,10.979,10.979,0,0,1-3.3-2l.948-1.537a1.354,1.354,0,0,1,.431-.451,1.2,1.2,0,0,1,.656-.158,1.522,1.522,0,0,1,.859.316q.451.317,1.1.7a8.5,8.5,0,0,0,1.56.7,7.131,7.131,0,0,0,2.294.317,6.307,6.307,0,0,0,2.057-.306,4.35,4.35,0,0,0,1.468-.823,3.273,3.273,0,0,0,.871-1.2,3.733,3.733,0,0,0,.282-1.448,2.408,2.408,0,0,0-.508-1.571,4.331,4.331,0,0,0-1.345-1.062,10.953,10.953,0,0,0-1.91-.768q-1.077-.327-2.193-.689t-2.194-.825a7.721,7.721,0,0,1-1.91-1.165,5.3,5.3,0,0,1-1.345-1.728,5.6,5.6,0,0,1-.508-2.5,6.1,6.1,0,0,1,.543-2.521A6.181,6.181,0,0,1,96.6,9.176a7.793,7.793,0,0,1,2.554-1.459,10.23,10.23,0,0,1,3.459-.542,10.96,10.96,0,0,1,4.058.711,9.633,9.633,0,0,1,3.108,1.956Z"
                        transform="translate(33.269 2.544)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_7"
                        data-name="Path 7"
                        d="M123.362,11.312a.892.892,0,0,1-.836.5,1.578,1.578,0,0,1-.769-.248c-.286-.167-.637-.351-1.051-.555a10.166,10.166,0,0,0-1.48-.565,7.074,7.074,0,0,0-2.034-.259,6,6,0,0,0-1.831.259,4.43,4.43,0,0,0-1.391.712,3.145,3.145,0,0,0-.88,1.051,2.828,2.828,0,0,0-.306,1.3,2.164,2.164,0,0,0,.509,1.47,4.406,4.406,0,0,0,1.345,1.017,11.751,11.751,0,0,0,1.9.756c.707.219,1.436.452,2.181.7s1.474.523,2.182.825a7.977,7.977,0,0,1,1.9,1.13,5.2,5.2,0,0,1,1.345,1.662,5.09,5.09,0,0,1,.508,2.362,7.477,7.477,0,0,1-.565,2.927,6.4,6.4,0,0,1-1.673,2.33,8.058,8.058,0,0,1-2.713,1.547,11.111,11.111,0,0,1-3.706.565,11.562,11.562,0,0,1-4.341-.779,10.979,10.979,0,0,1-3.3-2l.948-1.537a1.354,1.354,0,0,1,.431-.451,1.2,1.2,0,0,1,.656-.158,1.522,1.522,0,0,1,.859.316q.451.317,1.1.7a8.5,8.5,0,0,0,1.56.7,7.131,7.131,0,0,0,2.294.317,6.307,6.307,0,0,0,2.057-.306,4.35,4.35,0,0,0,1.468-.823,3.273,3.273,0,0,0,.871-1.2,3.733,3.733,0,0,0,.282-1.448,2.408,2.408,0,0,0-.508-1.571,4.331,4.331,0,0,0-1.345-1.062,10.953,10.953,0,0,0-1.91-.768q-1.077-.327-2.193-.689t-2.194-.825a7.721,7.721,0,0,1-1.91-1.165,5.3,5.3,0,0,1-1.345-1.728,5.6,5.6,0,0,1-.508-2.5,6.1,6.1,0,0,1,.543-2.521,6.181,6.181,0,0,1,1.581-2.124,7.793,7.793,0,0,1,2.554-1.459,10.23,10.23,0,0,1,3.459-.542,10.959,10.959,0,0,1,4.058.711,9.633,9.633,0,0,1,3.108,1.956Z"
                        transform="translate(38.403 2.544)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_8"
                        data-name="Path 8"
                        d="M141.377,30.447h-1.785a2.136,2.136,0,0,1-.951-.18,1,1,0,0,1-.474-.769l-.452-2.124q-.9.813-1.763,1.457a10.077,10.077,0,0,1-1.808,1.085,9.3,9.3,0,0,1-2.022.668,11.739,11.739,0,0,1-2.385.225,8.175,8.175,0,0,1-2.5-.372,5.694,5.694,0,0,1-2.022-1.124,5.348,5.348,0,0,1-1.367-1.893,6.624,6.624,0,0,1-.509-2.71,5.077,5.077,0,0,1,.745-2.621,6.579,6.579,0,0,1,2.408-2.233,15.641,15.641,0,0,1,4.352-1.6,29.68,29.68,0,0,1,6.577-.624v-1.8a6.232,6.232,0,0,0-1.142-4.061A4.137,4.137,0,0,0,132.9,10.4a7.146,7.146,0,0,0-2.475.374,9.306,9.306,0,0,0-1.74.836c-.489.309-.913.588-1.266.836a1.821,1.821,0,0,1-1.051.374,1.209,1.209,0,0,1-.711-.214,1.648,1.648,0,0,1-.488-.532l-.722-1.288a13.084,13.084,0,0,1,4.09-2.735,12.641,12.641,0,0,1,4.86-.9,8.692,8.692,0,0,1,3.414.633,7.019,7.019,0,0,1,2.508,1.763,7.5,7.5,0,0,1,1.537,2.735,11.4,11.4,0,0,1,.52,3.527Zm-10.444-2.464a8.274,8.274,0,0,0,1.945-.214,7.7,7.7,0,0,0,1.661-.611,8.867,8.867,0,0,0,1.493-.96,12.868,12.868,0,0,0,1.39-1.289V20.185a26.908,26.908,0,0,0-4.724.354,13.187,13.187,0,0,0-3.164.921,4.426,4.426,0,0,0-1.776,1.341,2.9,2.9,0,0,0-.553,1.727,3.829,3.829,0,0,0,.294,1.57,2.951,2.951,0,0,0,.791,1.079,3.09,3.09,0,0,0,1.174.614,5.3,5.3,0,0,0,1.47.194"
                        transform="translate(43.714 2.532)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_9"
                        data-name="Path 9"
                        d="M141.163,30.435V7.538h2.4a1.026,1.026,0,0,1,1.084.836l.317,2.487A12.85,12.85,0,0,1,148.3,8.193a8.661,8.661,0,0,1,4.26-1.017,8.267,8.267,0,0,1,3.312.622,6.4,6.4,0,0,1,2.4,1.763,7.8,7.8,0,0,1,1.459,2.745,12,12,0,0,1,.5,3.549v14.58H156.2V15.855a6.155,6.155,0,0,0-1.188-4.033,4.434,4.434,0,0,0-3.627-1.436,6.758,6.758,0,0,0-3.335.859,10.964,10.964,0,0,0-2.859,2.328V30.435Z"
                        transform="translate(50.031 2.544)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_10"
                        data-name="Path 10"
                        d="M175.766,11.606a1.758,1.758,0,0,1-.363.385.846.846,0,0,1-.519.135,1.292,1.292,0,0,1-.734-.283,10.9,10.9,0,0,0-1.006-.622,8.4,8.4,0,0,0-1.48-.622,7.869,7.869,0,0,0-5.1.317,5.746,5.746,0,0,0-2.159,1.73,7.838,7.838,0,0,0-1.31,2.735,13.565,13.565,0,0,0-.442,3.595,13.107,13.107,0,0,0,.475,3.695,7.979,7.979,0,0,0,1.333,2.712,5.686,5.686,0,0,0,2.091,1.674,6.453,6.453,0,0,0,2.768.577,7.055,7.055,0,0,0,2.419-.351,7.354,7.354,0,0,0,1.582-.78,11.23,11.23,0,0,0,1.04-.78,1.255,1.255,0,0,1,.814-.349.853.853,0,0,1,.769.383l1.13,1.47a8.708,8.708,0,0,1-3.73,2.678,13.2,13.2,0,0,1-4.723.848,10,10,0,0,1-3.991-.791,9.113,9.113,0,0,1-3.2-2.293,10.9,10.9,0,0,1-2.136-3.7,14.844,14.844,0,0,1-.779-4.994,15.048,15.048,0,0,1,.711-4.724,10.721,10.721,0,0,1,2.079-3.742,9.413,9.413,0,0,1,3.379-2.451,11.392,11.392,0,0,1,4.612-.882,10.87,10.87,0,0,1,4.249.78,10.157,10.157,0,0,1,3.278,2.2Z"
                        transform="translate(56.182 2.544)"
                        fill={fillColor}
                    />
                    <Path
                        id="Path_11"
                        data-name="Path 11"
                        d="M184.8,7.176a10.2,10.2,0,0,1,3.8.689,8.53,8.53,0,0,1,3.007,1.99,9.079,9.079,0,0,1,1.977,3.209,12.389,12.389,0,0,1,.712,4.352,2.622,2.622,0,0,1-.2,1.265.846.846,0,0,1-.768.317H178.085a12.641,12.641,0,0,0,.588,3.776,7.692,7.692,0,0,0,1.493,2.678,5.958,5.958,0,0,0,2.261,1.6,7.765,7.765,0,0,0,2.938.531,8.6,8.6,0,0,0,2.61-.351,12.417,12.417,0,0,0,1.888-.757,13.953,13.953,0,0,0,1.322-.757,1.743,1.743,0,0,1,.916-.349.888.888,0,0,1,.769.383l1.13,1.47a7.659,7.659,0,0,1-1.786,1.571,11.07,11.07,0,0,1-2.225,1.1,14.108,14.108,0,0,1-2.453.645,15.081,15.081,0,0,1-2.508.214,11.645,11.645,0,0,1-4.375-.8,9.6,9.6,0,0,1-3.459-2.351,10.786,10.786,0,0,1-2.27-3.83,15.57,15.57,0,0,1-.814-5.244,13.365,13.365,0,0,1,.734-4.476,10.533,10.533,0,0,1,2.114-3.6,9.712,9.712,0,0,1,3.367-2.4,11.044,11.044,0,0,1,4.476-.871m.089,2.961a6.179,6.179,0,0,0-4.589,1.685,7.92,7.92,0,0,0-2.079,4.667h12.454a8.165,8.165,0,0,0-.383-2.567,5.738,5.738,0,0,0-1.131-2.011,5.057,5.057,0,0,0-1.818-1.311,6.153,6.153,0,0,0-2.454-.463"
                        transform="translate(61.707 2.544)"
                        fill={fillColor}
                    />
                </G>
            </G>
        </Svg>
    );
}

Logo.defaultProps = {
    size: 1,
};

type TLogoProps = {
    color: string;
    size: number;
};