import numpy as np
import pandas as pd
import csv
import pywt 
import pickle

def GetData(path):
    dataset = pd.read_csv(path)
    dataframe = pd.DataFrame(dataset)
    return dataframe

def calculateFatures(featureList, coeffs):

    for x in coeffs:
        enSum = 0
        for y in x:
            energy = np.power(np.abs(y), 2)
            enSum = enSum + energy
        featureList.append(enSum)

    return featureList

def waveletImplementation(testSample, testID, lvl, wavelet):

    ProcessNameDTW = testSample.ProcessNameDTW.to_numpy()
    ProcessNameDTW = ProcessNameDTW[0]

    testSample = testSample.values
    current_x = testSample[:, 4:5]
    current_x = current_x[:,0]

    coeffs = pywt.wavedec(current_x, wavelet, mode = 'sym', level = lvl)

    featureListCoeffs = [testID, ProcessNameDTW]

    processFeaturesCoeff = calculateFatures(featureListCoeffs, coeffs)

    processFeaturesCoeff = (np.array(processFeaturesCoeff)).reshape(1, -1)

    df = pd.DataFrame(processFeaturesCoeff, columns = ['Process', 'ProcessNameDTW', 'EnergycA3', 'EnergycD3', 'EnergycD2', 'EnergycD1'])
    return df

def classifier(testFatures):
  
    data = testFatures.iloc[:, 2:]

    label = testFatures.iloc[:, 1]

    loaded_model = pickle.load(open('BackEnd/svm.sav', 'rb'))
    pred = loaded_model.predict(data) 
    return pred


def main(machineName):
    
    if (machineName == 'Machine - 1'):
        testID = 212
    
    elif (machineName == 'Machine - 2'):
        testID = 3
    
    elif (machineName == 'Machine - 3'):
        testID = 5

    elif (machineName == 'Machine - 4'):
        testID = 1023

    DataFilePathRead = 'BackEnd/testSample.csv'

    testSample = GetData(DataFilePathRead)

    dict_of_Test_Process = {k: v for k, v in testSample.groupby('Process')}
    processDataFrame = dict_of_Test_Process[testID]

    testFatures = waveletImplementation(processDataFrame, testID, 3, 'db1')
    predictedLabel = classifier(testFatures)

    processDict = {'MachineNo': machineName, 
                    "Date": processDataFrame.iloc[0]['Date'], 
                    #'Status': processDataFrame.Status.astype(int).tolist(), 
                    'Current': processDataFrame.Current.astype(int).tolist(), 
                    'UniqueID': int(processDataFrame.iloc[0]['Process']), 
                    'Label': processDataFrame.iloc[0]['ProcessNameDTW'], 
                    'PredictedLabel': str(predictedLabel[0])}
    
    return processDict