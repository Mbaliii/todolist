import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const GoalItem = ({ text, onDelete }) => {
    return (
        <TouchableOpacity style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#20b2aa',
        color: 'white',
    },
    goalText: {
        color: 'white',
    },
    deleteButton: {
        padding: 4,
        borderRadius: 4,
    },
    deleteButtonText: {
        color: 'white',
    },
});

export default GoalItem;
