import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceDevicesFold(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M20,3h-3c0-1.43-1.47-2.4-2.79-1.84l-3,1.29C10.48,2.76,10,3.49,10,4.29V19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19h-5.33l1.12-0.48C16.52,18.2,17,17.48,17,16.68V5h3V19z" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="19" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="15" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="11" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="7" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="19" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,3h-3c0-1.44-1.47-2.4-2.79-1.84l-3,1.29C10.48,2.76,10,3.49,10,4.29V19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M15,16.68l-3,1.29V4.29L15,3V16.68z M20,19h-5.33l1.12-0.48C16.52,18.2,17,17.48,17,16.68V5h3V19z" />
                            <G>
                                <Rect height="2" width="2" x="2" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="19" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="15" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="11" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="7" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="19" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M20,3h-3c0-1.43-1.47-2.4-2.79-1.84l-3,1.29C10.48,2.76,10,3.49,10,4.29V19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19h-5.33l1.12-0.48C16.52,18.2,17,17.48,17,16.68V5h3V19z" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="19" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="15" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="11" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="7" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="19" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M17,3v-3.03l-7,3V3v18h12V3H17z M20,19h-5.33L17,18V5h3V19z" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="19" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="15" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="11" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="7" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="19" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,3h-3c0-1.44-1.47-2.4-2.79-1.84l-3,1.29C10.48,2.76,10,3.49,10,4.29V19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M15,16.68l-3,1.29V4.29L15,3V16.68z M20,19h-5.33l1.12-0.48C16.52,18.2,17,17.48,17,16.68V5h3V19z" />
                            <G>
                                <Rect height="2" width="2" x="2" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="19" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="15" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="11" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="2" y="7" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="3" />
                            </G>
                            <G>
                                <Rect height="2" width="2" x="6" y="19" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
