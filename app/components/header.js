import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {Button} from "native-base";

import Icon from "./iwwa-icons";
import * as colors from "../lib/colors";

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primaryBlue,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        paddingLeft: 3,
        paddingRight: 3,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        height: 60
    },
    leftHeader: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignSelf: "center"
    },
    rightHeader: {
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    iconRightButton: {
        padding: 0
    },
    iconAlarmButton: {
        alignSelf: "center",
        borderRadius: 100,
        backgroundColor: colors.secondaryBlue,
        padding: 5,
        marginRight: 5
    },
    iconUserButton: {
        alignSelf: "center",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.white,
        padding: 5
    }
});

export default class Header extends Component {

    renderLeftButton () {
        return (
            <View style={styles.leftHeader}>
                <Button transparent={true} style={styles.iconRightButton}>
                    <Icon name={"iw-menu"} size={50} color={colors.white} />
                </Button>
                <Button transparent={true} style={styles.iconRightButton}>
                    <Icon name={"iw-innowatio-logo"} size={35} color={colors.white} />
                </Button>
            </View>
        );
    }

    renderRightButton () {
        return (
            <View style={styles.rightHeader}>
                <Button transparent={true} style={[styles.iconAlarmButton]}>
                    <Icon name={"iw-alarms"} size={25} color={colors.white} />
                </Button>
                <Button transparent={true} style={[styles.iconUserButton]}>
                    <Icon name={"iw-user"} size={23} color={colors.white} />
                </Button>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.header}>
                {this.renderLeftButton()}
                {this.renderRightButton()}
            </View>
        );
    }

}
